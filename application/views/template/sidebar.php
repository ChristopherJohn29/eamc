


<li class="menu-title">Navigation</li>

<li class="menu-item menuitem-active">
    <a href="#" class="menu-link">
        <span class="menu-icon"><i data-feather="airplay"></i></span>
        <span class="menu-text"> Dashboard </span>
    </a>
</li>

<li class="menu-item">
    <a href="#menuCAR" data-bs-toggle="collapse" class="menu-link">
        <span class="menu-icon"><i data-feather="layers"></i></span>
        <span class="menu-text"> C.A.R </span>
        <span class="menu-arrow"></span>
    </a>
    <div class="collapse" id="menuCAR">
        <ul class="sub-menu">
            <li class="menu-item">
                <a href="#" class="menu-link">
                    <span class="menu-text">List</span>
                </a>
            </li>
            <li class="menu-item">
                <a href="#" class="menu-link">
                    <span class="menu-text">NC Definition</span>
                </a>
            </li>
            <li class="menu-item">
                <a href="#" class="menu-link">
                    <span class="menu-text">Corrective Action</span>
                </a>
            </li>
            <li class="menu-item">
                <a href="#" class="menu-link">
                    <span class="menu-text">Verification</span>
                </a>
            </li>
            <li class="menu-item">
                <a href="#" class="menu-link">
                    <span class="menu-text">Validation</span>
                </a>
            </li>
            <li class="menu-item">
                <a href="#" class="menu-link">
                    <span class="menu-text">Closing</span>
                </a>
            </li>
        </ul>
    </div>
</li>


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
                'designation' => 'commitee',
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
                'role' => ['department_head'],
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
                'role' => ['div_chief'],
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

            <li class="menu-item">
                <a href="<?=base_url().'admin/documentedinformation/published'?>" class="menu-link">
                    <span class="menu-text">Published</span>
                </a>
            </li>

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
                                                            <a href="#<?=str_replace(' ','',$svalue['section_name']).$svalue['id']?>" data-bs-toggle="collapse" class="menu-link">
                                                                <span class="menu-text"><?=$svalue['section_name']?></span>
                                                                <span class="menu-arrow"></span>
                                                            </a>
                                                            <div class="collapse" id="<?=str_replace(' ','',$svalue['section_name']).$svalue['id']?>" style="">
                                                                <ul class="sub-menu">
                                                                    <?php 
                                                                    
                                                                    foreach ($documenttype as $dtkey => $dtvalue) {
                                                                    ?>
                                                                        <li class="menu-item">
                                                                            <a href="<?=base_url().'admin/allPublished/'.$value['id'].'/'.$dvalue['id'].'/'.$dtvalue['id'].'/'.$svalue['id']?>" class="menu-link">
                                                                                <span class="menu-text"><?=$dtvalue['doc_type_name']?></span>
                                                                            </a>
                                                                        </li>
                                                                    <?php
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

                                                }else {
                                        ?>
                                        <li class="menu-item">
                                            <a href="#<?=str_replace(' ','',$dvalue['dep_name']).$dvalue['id']?>" data-bs-toggle="collapse" class="menu-link">
                                                <span class="menu-text"><?=$dvalue['dep_name']?></span>
                                                <span class="menu-arrow"></span>
                                            </a>
                                            <div class="collapse" id="<?=str_replace(' ','',$dvalue['dep_name']).$dvalue['id']?>" style="">
                                                <ul class="sub-menu">
                                                    <?php 
                                                    
                                                    foreach ($documenttype as $dtkey => $dtvalue) {
                                                    ?>
                                                        <li class="menu-item">
                                                            <a href="<?=base_url().'admin/allPublished/'.$value['id'].'/'.$dvalue['id'].'/'.$dtvalue['id'].'/0'?>" class="menu-link">
                                                                <span class="menu-text"><?=$dtvalue['doc_type_name']?></span>
                                                            </a>
                                                        </li>
                                                    <?php
                                                    }
                                                    
                                                    ?>
                                                    
                                                </ul>
                                            </div>
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
    'role' => ['osqm_dco'],
);

if ($this->role_checker->checkRole($requiredRoles)) {
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




