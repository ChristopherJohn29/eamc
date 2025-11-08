<li class="menu-title">Navigation</li>


<li class="menu-item">
    <a href="<?=base_url().'admin/car/car'?>" class="menu-link">
        <span class="menu-icon"><i data-feather="layers"></i></span>
        <span class="menu-text"> C.A.R  </span>
    </a>
</li>

<?php 
$requiredRoles = array(
    'role' => ['super_admin'],
);

if ($this->role_checker->checkRole($requiredRoles)) {
?>
    <li class="menu-item">
        <a href="<?=base_url().'admin/car/carhistory'?>" class="menu-link">
            <span class="menu-icon"><i data-feather="layers"></i></span>
            <span class="menu-text"> C.A.R  Logs</span>
        </a>
    </li>
    <?php
}
?>


<li class="menu-item">
    <a href="#menuDI" data-bs-toggle="collapse" class="menu-link">
        <span class="menu-icon"><i data-feather="file-text"></i></span>
        <span class="menu-text"> Documented Info. </span>
        <span class="menu-arrow"></span>
    </a>
    <div class="collapse" id="menuDI">
        <ul class="sub-menu">


            <li class="menu-item">
                <a href="<?=base_url().'admin/documentedinformation'?>" class="menu-link">
                    <span class="menu-text">List</span>
                </a>
            </li>
            

            <?php 
            
            $requiredRoles = array(
                'designation' => 'committee',
                'section' => 'forms',
                'role' => ['chair', 'member'],
            );
    
            if ($this->role_checker->checkRole($requiredRoles)) {
            ?>
                <li class="menu-item">
                    <a href="<?=base_url().'admin/documentedinformation/formsReview'?>" class="menu-link">
                        <span class="menu-text">Forms Review</span>
                    </a>
                </li>
                <?php
            }
            ?>

            <?php 
            $requiredRoles = array(
                'designation' => 'division',
                'role' => ['osqm_dco'],
            );
    
            if ($this->role_checker->checkRole($requiredRoles)) {
            ?>
            
            <li class="menu-item">
                <a href="<?=base_url().'admin/documentedinformation/technicalReview'?>" class="menu-link">
                    <span class="menu-text">Technical Review</span>
                </a>
            </li>

            <?php
            }
            ?>

            <?php 
            $requiredRoles = array(
                'designation' => 'division',
                'role' => ['department_head', 'osqm_qmr'],
            );
    
            if ($this->role_checker->checkRole($requiredRoles)) {
                ?>
                <li class="menu-item">
                <a href="<?=base_url().'admin/documentedinformation/finalReview'?>" class="menu-link">
                        <span class="menu-text">Final Review</span>
                    </a>
                </li>
                <?php
            }
            ?>

            <?php 
            $requiredRoles = array(
                'designation' => 'division',
                'role' => ['div_chief', 'medical_center_chief'],
            );
    
            if ($this->role_checker->checkRole($requiredRoles)) {
            ?>
            
            <li class="menu-item">
                <a href="<?=base_url().'admin/documentedinformation/approval'?>" class="menu-link">
                    <span class="menu-text">Approval</span>
                </a>
            </li>
            <?php
            }
            ?>
            <?php 
            $requiredRoles = array(
                'designation' => 'division',
                'role' => ['osqm_dco'],
            );
    
            if ($this->role_checker->checkRole($requiredRoles)) {
            ?>
            <li class="menu-item">
                <a href="<?=base_url().'admin/documentedinformation/checking'?>" class="menu-link">
                    <span class="menu-text">Checking</span>
                </a>
            </li>

            <?php
            }

            ?>
            <?php 
            $requiredRoles = array(
                'designation' => 'division',
                'role' => ['osqm_qmr'],
            );
    
            if ($this->role_checker->checkRole($requiredRoles)) {
            ?>

            <li class="menu-item">
                <a href="<?=base_url().'admin/documentedinformation/approvalForPublishing'?>" class="menu-link">
                    <span class="menu-text">Approval For Publishing</span>
                </a>
            </li>
            <?php
            }

            ?>

            <?php 
            $requiredRoles = array(
                'designation' => 'division',
                'role' => ['osqm_dco'],
            );
    
            if ($this->role_checker->checkRole($requiredRoles)) {
            ?>
            <li class="menu-item">
                <a href="<?=base_url().'admin/documentedinformation/publishing'?>" class="menu-link">
                    <span class="menu-text">Publishing</span>
                </a>
            </li>

            <?php
            }

            ?>

            <?php 
            
            if($this->session->role != 'super_admin'){

            ?>
            <li class="menu-item">
                <a href="<?=base_url().'admin/documentedinformation/published'?>" class="menu-link">
                    <span class="menu-text">Published</span>
                </a>
            </li>
            <li class="menu-item">
                <a href="<?=base_url().'admin/documentedinformation/obsolete'?>" class="menu-link">
                    <span class="menu-text">Obsolete</span>
                </a>
            </li>
            <?php 
            
             }
            ?>
            <?php 
            
            $requiredRoles = array(
                'role' => ['super_admin'],
            );
    
            if ($this->role_checker->checkRole($requiredRoles)) {
            ?>
                <li class="menu-item">
                    <a href="<?=base_url().'admin/documentedinformation/diHistory'?>" class="menu-link">
                        <span class="menu-text">Documented Info. Logs</span>
                    </a>
                </li>
                <?php
            }
            ?>

        </ul>
    </div>
</li>

<li class="menu-item">
    <a href="#menuPublisedFile" data-bs-toggle="collapse" class="menu-link">
        <span class="menu-icon"><i data-feather="file"></i></span>
        <span class="menu-text"> Published </span>
        <span class="menu-arrow"></span>
    </a>
    <div class="collapse" id="menuPublisedFile">
        <ul class="sub-menu">
        <?php
            
            $division = $this->DivisionModel->getDivision();
            $documenttype = $this->DocumentTypeModel->getDocumentType();
           
            foreach ($division as $key => $value) {
                ?>
                <li class="menu-item">
                    <a href="#<?=str_replace(' ','',$value['div_name']).$value['id']?>" data-bs-toggle="collapse" class="menu-link">
                        <span class="menu-text"><?=$value['div_name']?></span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="<?=str_replace(' ','',$value['div_name']).$value['id']?>" style="">
                        <ul class="sub-menu">
                            <?php $department = $this->DepartmentModel->getDepartmentByDiv($value['id']);?>

                            <?php 
                                foreach ($department as $dkey => $dvalue) {
                                    $section = $this->DepartmentModel->getSectionByDip($dvalue['id']);
                                    if($section){
                                    ?>
                                    <li class="menu-item">
                                        <a href="#<?=str_replace(' ','',$dvalue['dep_name']).$dvalue['id']?>" data-bs-toggle="collapse" class="menu-link">
                                            <span class="menu-text"><?=$dvalue['dep_name']?></span>
                                            <span class="menu-arrow"></span>
                                        </a>
                                        <div class="collapse" id="<?=str_replace(' ','',$dvalue['dep_name']).$dvalue['id']?>" style="">
                                            <ul class="sub-menu">
                                                <?php $section = $this->DepartmentModel->getSectionByDip($dvalue['id']);?>

                                                <?php 
                                                    foreach ($section as $skey => $svalue) {
                                                        ?>
                                                        <li class="menu-item">
                                                                <a target="_blank" href="<?=base_url().'admin/portal/'.$value['id'].'/'.$dvalue['id'].'/1/'.$svalue['id']?>" class="menu-link">
                                                                <span class="menu-text"><?=$svalue['section_name']?></span>
                                                            </a>
                                                        </li>
                                                <?php           
                                                }
                                        ?>
                                            </ul>
                                        <?php            
                                                }else {
                                        ?>
                                            <li class="menu-item">
                                                    <a target="_blank" href="<?=base_url().'admin/portal/'.$value['id'].'/'.$dvalue['id'].'/1/0'?>" class="menu-link">
                                                    <span class="menu-text"><?=$dvalue['dep_name']?></span>
                                                </a>
                                            </li>
                                        <?php
                                        }
                                }
                            ?>
                            
                        </ul>
                    </div>
                </li>
                <?php
            }
            ?>

             
        </ul>
    </div>
</li>

<?php 
$requiredRoles = array(
    'designation' => 'division',
    'role' => ['osqm_dco', 'osqm_staff', 'super_admin'],
);

if ($this->role_checker->checkRole($requiredRoles) || $this->session->userdata('role') == 'super_admin') {
?>
<li class="menu-item">
    <a href="#menuMasterFile" data-bs-toggle="collapse" class="menu-link">
        <span class="menu-icon"><i data-feather="package"></i></span>
        <span class="menu-text"> Masterfile </span>
        <span class="menu-arrow"></span>
    </a>
    <div class="collapse" id="menuMasterFile">
        <ul class="sub-menu">
            <li class="menu-item">
                <a href="<?=base_url().'admin/division'?>" class="menu-link">
                    <span class="menu-text">Divisions</span>
                </a>
            </li>
            <li class="menu-item">
                <a href="<?=base_url().'admin/department'?>" class="menu-link">
                    <span class="menu-text">Departments</span>
                </a>
            </li>
            <li class="menu-item">
                <a href="<?=base_url().'admin/section'?>" class="menu-link">
                    <span class="menu-text">Section</span>
                </a>
            </li>
            <li class="menu-item">
                <a href="<?=base_url().'admin/source'?>" class="menu-link">
                    <span class="menu-text">Source</span>
                </a>
            </li>
            <li class="menu-item">
                <a href="<?=base_url().'admin/documenttype'?>" class="menu-link">
                    <span class="menu-text">Document Type</span>
                </a>
            </li>
        </ul>
    </div>
</li>

<li class="menu-item">
    <a href="#menuUSER" data-bs-toggle="collapse" class="menu-link">
        <span class="menu-icon"><i data-feather="users"></i></span>
        <span class="menu-text"> User Management </span>
        <span class="menu-arrow"></span>
    </a>
    <div class="collapse" id="menuUSER">
        <ul class="sub-menu">
            <li class="menu-item">
                <a href="<?=base_url().'admin/users/newUsers'?>" class="menu-link">
                    <span class="menu-text">New Users</span>
                </a>
            </li>
            <li class="menu-item">
                <a href="<?=base_url().'admin/users/approvedUsers'?>" class="menu-link">
                    <span class="menu-text">Approved Users</span>
                </a>
            </li>

        </ul>
    </div>
</li>
<?php
}

?>




