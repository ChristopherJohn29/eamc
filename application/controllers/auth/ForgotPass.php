<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class forgotpass extends CI_Controller {

	public function __construct(){

        parent::__construct();

        $this->load->model('LoginModel');
		$this->load->model('DocumentTypeModel');
		$this->load->model('DivisionModel');
		$this->load->model('DepartmentModel');
    }

	public function index()
	{	
		
		if(isset($_GET['redirect'])){
			$data['redirect'] = $_GET['redirect'];
		} else {
			if (isset($_SERVER['HTTP_REFERER'])) {
				$referer = $_SERVER['HTTP_REFERER'];
			
				// Check if the referrer is on the same server and contains "admin/portal"
				if (
					strpos($referer, $_SERVER['HTTP_HOST']) !== false 
					&& strpos($referer, 'admin/portal') !== false
				) {
					$data['redirect'] = $referer;
				} else {
					$data['redirect'] = base_url().'admin/login';
				}
			} else {
				$data['redirect'] = base_url().'admin/login';
			}
		}

		$this->load->view('auth/forgot_pass', $data);
	}

	public function reset(){
		$email = $_POST['email'];

		$user = $this->LoginModel->checkCredsEmail($email);

		if($user){

			$checkDCO = $this->LoginModel->checkDCOEmail($email);
			if($checkDCO){
				$checkEmail = $this->LoginModel->checkEmailEmail($email);

				if($checkEmail){
					
                    $token = bin2hex(random_bytes(50));
                    $this->LoginModel->store_reset_token($user->id, $token);

                    $reset_link = base_url() . "auth/ForgotPass/reset_password/" . $token;
                    $message = "Click here to reset your password: " . $reset_link;
                    
                    $config = array(
                        'protocol' => 'smtp',
                        'smtp_host' => 'c116783.sgvps.net',
                        'smtp_port' => 587,
                        'smtp_user' => 'iqms-eamc@infoadvance.com.ph',
                        'smtp_pass' => '5dbbx&5357eo',
                        'mailtype' => 'text',
                        'charset' => 'utf-8',
                        'newline' => "\r\n"
                    );
                
                    $this->load->library('email', $config); // Load email library
                    $this->email->from('iqms-eamc@infoadvance.com.ph', 'IQMS EAMC');
                    $this->email->to($user['email']); // User's email address
                    $this->email->subject('Password Reset Request');
                    $this->email->message($message);
        
                    if ($this->email->send()) {
                        // Insertion successful
                        echo "saved";
                    } else {
                        // Insertion failed
                        echo $this->email->print_debugger();
                    }

				} else {
					echo 'emailnotverified';
				}
			} else {
				echo 'dconotapprove';
			}
			
		} else {
			echo 'wrongcreds';
		}
	}

    public function reset_password($token) {
        $user_id = $this->LoginModel->get_user_id_by_token($token);

        if ($user_id) {
            $this->load->view('reset_password_view', ['token' => $token]);
        } else {
            echo "Invalid token.";
        }
    }

	public function signout() {
		// Unset user session data
		$this->session->unset_userdata('user_id');
		$this->session->unset_userdata('firstname');
		$this->session->unset_userdata('department');
		$this->session->unset_userdata('role');
	
		// Destroy the session
		$this->session->sess_destroy();
	
		// Redirect to the login page
		redirect('auth/login');
	}

    public function update_password() {
        $token = $this->input->post('token');
        $new_password = md5($this->input->post('password'));

        $user_id = $this->LoginModel->get_user_id_by_token($token);

        if ($user_id) {
            $this->LoginModel->update_password($user_id, $new_password);
            echo "Your password has been updated.";
        } else {
            echo "Failed to update password.";
        }
    }

	
}
