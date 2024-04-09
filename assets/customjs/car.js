var car = {

    load : function (){
        dataTable = $('#car-global-datatable.dataTable');

        if (dataTable.length) {
            // If it's a DataTable, destroy it
            dataTable.DataTable().destroy();
        }

        $('#car-global-datatable tbody').html('');

    

        $.ajax({
            type: 'POST',
            url: 'getCar', // Replace 'MyController' with your controller name
            data: {'status' : 'all'},
            success: function (response) {
                if(response != 'null'){

                   

                    $.each(JSON.parse(response), function (index, item) {

                        var userrole = jQuery('.user-client').data('role');
                        var userdepartmentsection = jQuery('.user-client').data('department_section');
                        var usersection = jQuery('.user-client').data('section');
                        var userdepartment = jQuery('.user-client').data('department');

                        // Access each item's properties
                        var car_id = item.id || '';
                        var requestor = item.requestor || '';
                        var car_no = item.car_no || '';
                        var source_name = item.source_name || '';
                        var source = item.source || '';
                        var issued_by_name = item.division || '';
                        var issued_by = item.issued_by || '';
                        var issued_to = item.issued_to || '';
                        var issued_to_name = item.department || '';
                        var section = item.section || '';
                        var findings = item.findings || '';
                        var consequences = item.consequences || '';
                        var requirements_not_fulfilled = item.requirements_not_fulfilled || '';
                        var identification_date = item.identification_date || '';
                        var registration_date = item.registration_date || '';
                        var ca_completion_date = item.ca_completion_date || '';
                        var fc_completion_date = item.fc_completion_date || '';
                        var date_closed = item.date_closed || '';
                        var corrective_action_status = item.corrective_action_status || '';
                        var for_correction_status = item.for_correction_status || '';
                        var status = item.status || '';
                        var issuance_of_nc = item.issuance_of_nc || '';
                        var issuance_of_nc_remarks = item.issuance_of_nc_remarks || '';

                        var corrective_action_status = item.corrective_action_status || '';
                        var for_correction_status = item.for_correction_status || '';

                        var osqm_review_correction = "";
                        var osqm_approval_correction = "";
                        var osqm_verification_correction = "";
                        var osqm_validation_correction = "";
                        var osqm_review_corrective_action = "";
                        var osqm_approval_corrective_action = "";
                        var osqm_verification_corrective_action = "";
                        var osqm_validation_corrective_action = "";
                        var osqm_validation_correction_closing = "";


                        var osqm_review_corrective_action = "";
                        
          
                        if(section != ''){
                            if(for_correction_status == 'For OSQM Review' && ( userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) ) ){
                                var osqm_review_correction = "<a class='dropdown-item for-osqm-review-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.2 Correction - For OSQM Review</a>";
                            }
                        } else {
                            if(for_correction_status == 'For OSQM Review' && ( userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) ) ){
                                var osqm_review_correction = "<a class='dropdown-item for-osqm-review-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.2 Correction - For OSQM Review</a>";
                            }
                        }
                        

                        if(section != ''){
                            if(corrective_action_status == 'For OSQM Review' && ( userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) ) ){
                                var osqm_review_corrective_action = "<a class='dropdown-item for-osqm-review-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.3&4 Corrective Action - For OSQM Review</a>";
                            }
                        } else {
                            if(corrective_action_status == 'For OSQM Review' && ( userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) ) ){
                                var osqm_review_corrective_action = "<a class='dropdown-item for-osqm-review-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.3&4 Corrective Action - For OSQM Review</a>";
                            }
                        }

                        if(section != ''){
                            if(for_correction_status == 'For Approval'  && ( userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) ) ){
                                var osqm_approval_correction = "<a class='dropdown-item for-osqm-approval-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.2 Correction - For Approval</a>";
                            }
                        } else {
                            if(for_correction_status == 'For Approval' && ( userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) ) ){
                                var osqm_approval_correction = "<a class='dropdown-item for-osqm-approval-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.2 Correction - For Approval</a>";
                            }
                        }
                        
                        if(section != ''){
                            if(corrective_action_status == 'For Approval' && ( userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) ) ){
                                var osqm_approval_corrective_action = "<a class='dropdown-item for-osqm-approval-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.3&4 Corrective Action - For Approval</a>";
                            }
                        } else {
                            if(corrective_action_status == 'For Approval'  && ( userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) ) ){
                                var osqm_approval_corrective_action = "<a class='dropdown-item for-osqm-approval-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.3&4 Corrective Action - For Approval</a>";
                            }
                        }


                        ///////////////////////////////////////////
                        if(source == "1"){

                            if(section != ''){
                                if(for_correction_status == 'For Verification' && ( (userrole == "chair" && usersection == "internal_quality_audit") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) )){
                                    var osqm_verification_correction = "<a class='dropdown-item for-osqm-verification-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.5 Correction - For Verification</a>";
                                }
                            } else {
                                if(for_correction_status == 'For Verification' && (  (userrole == "chair" && usersection == "internal_quality_audit") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) )){
                                    var osqm_verification_correction = "<a class='dropdown-item for-osqm-verification-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.5 Correction - For Verification</a>";
                                }
                            }

                            console.log(userrole);
                            console.log(usersection);

                            if(section != ''){
                                if(corrective_action_status == 'For Verification' && ( (userrole == "chair" && usersection == "internal_quality_audit") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) )){
                                    var osqm_verification_corrective_action = "<a class='dropdown-item for-osqm-verification-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.5 Corrective Action - For Verification</a>";
                                }
                            } else {
                                if(corrective_action_status == 'For Verification' && (  (userrole == "chair" && usersection == "internal_quality_audit") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) )){
                                    var osqm_verification_corrective_action = "<a class='dropdown-item for-osqm-verification-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.5 Corrective Action - For Verification</a>";
                                }
                            }


                            if(section != ''){
                                if(for_correction_status == 'For Validation' && ( userrole == "osqm_qmr" || (userrole == "lead_auditor" && usersection == "internal_quality_audit") || (userrole == "chair" && usersection == "internal_quality_audit") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) )){
                                    var osqm_validation_correction = "<a class='dropdown-item for-osqm-validation-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.6 Correction - For Validation</a>";
                                }
                            } else {
                                if(for_correction_status == 'For Validation' && ( userrole == "osqm_qmr" || (userrole == "lead_auditor" && usersection == "internal_quality_audit") || (userrole == "chair" && usersection == "internal_quality_audit") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) )){
                                    var osqm_validation_correction = "<a class='dropdown-item for-osqm-validation-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.6 Correction - For Validation</a>";
                                }
                            }


                            if(section != ''){
                                if(corrective_action_status == 'For Validation'  && ( userrole == "osqm_qmr" || (userrole == "lead_auditor" && usersection == "internal_quality_audit") || (userrole == "chair" && usersection == "internal_quality_audit") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) )){
                                    var osqm_validation_corrective_action = "<a class='dropdown-item for-osqm-validation-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.6 Corrective Action - For Validation</a>";
                                }
                            } else {
                                if(corrective_action_status == 'For Validation' && ( userrole == "osqm_qmr" || (userrole == "lead_auditor" && usersection == "internal_quality_audit") || (userrole == "chair" && usersection == "internal_quality_audit") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) )){
                                    var osqm_validation_corrective_action = "<a class='dropdown-item for-osqm-validation-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.6 Corrective Action - For Validation</a>";
                                }
                            }
                        }

                        if(source == "2"){

                            if(section != ''){
                                if(for_correction_status == 'For Verification' && ( (userrole == "auditor" && usersection == "internal_quality_audit") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) )){
                                    var osqm_verification_correction = "<a class='dropdown-item for-osqm-verification-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.5 Correction - For Verification</a>";
                                }
                            } else {
                                if(for_correction_status == 'For Verification' && (  (userrole == "auditor" && usersection == "internal_quality_audit") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) )){
                                    var osqm_verification_correction = "<a class='dropdown-item for-osqm-verification-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.5 Correction - For Verification</a>";
                                }
                            }


                            if(section != ''){
                                if(corrective_action_status == 'For Verification' && ( (userrole == "auditor" && usersection == "internal_quality_audit") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) )){
                                    var osqm_verification_corrective_action = "<a class='dropdown-item for-osqm-verification-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.5 Corrective Action - For Verification</a>";
                                }
                            } else {
                                if(corrective_action_status == 'For Verification' && (  (userrole == "auditor" && usersection == "internal_quality_audit") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) )){
                                    var osqm_verification_corrective_action = "<a class='dropdown-item for-osqm-verification-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.5 Corrective Action - For Verification</a>";
                                }
                            }


                            if(section != ''){
                                if(for_correction_status == 'For Validation' && ( userrole == "osqm_qmr" || (userrole == "lead_auditor" && usersection == "internal_quality_audit") || (userrole == "auditor" && usersection == "internal_quality_audit") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) )){
                                    var osqm_validation_correction = "<a class='dropdown-item for-osqm-validation-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.6 Correction - For Validation</a>";
                                }
                            } else {
                                if(for_correction_status == 'For Validation' && ( userrole == "osqm_qmr" || (userrole == "lead_auditor" && usersection == "internal_quality_audit") || (userrole == "auditor" && usersection == "internal_quality_audit") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) )){
                                    var osqm_validation_correction = "<a class='dropdown-item for-osqm-validation-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.6 Correction - For Validation</a>";
                                }
                            }

                            if(section != ''){
                                if(corrective_action_status == 'For Validation'  && ( userrole == "osqm_qmr" || (userrole == "lead_auditor" && usersection == "internal_quality_audit") || (userrole == "auditor" && usersection == "internal_quality_audit") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) )){
                                    var osqm_validation_corrective_action = "<a class='dropdown-item for-osqm-validation-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.6 Corrective Action - For Validation</a>";
                                }
                            } else {
                                if(corrective_action_status == 'For Validation' && ( userrole == "osqm_qmr" || (userrole == "lead_auditor" && usersection == "internal_quality_audit") || (userrole == "auditor" && usersection == "internal_quality_audit") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) )){
                                    var osqm_validation_corrective_action = "<a class='dropdown-item for-osqm-validation-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.6 Corrective Action - For Validation</a>";
                                }
                            }
                        }

                        if(source == "3" || source == "4" || source == "5" || source == "6" || source == "7"){

                            if(section != ''){
                                if(for_correction_status == 'For Verification' && ( ( userrole == "dqt_member" && section == userdepartmentsection ) || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) )){
                                    var osqm_verification_correction = "<a class='dropdown-item for-osqm-verification-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.5 Correction - For Verification</a>";
                                }
                            } else {
                                if(for_correction_status == 'For Verification' && (  ( userrole == "dqt_member" && issued_to == userdepartment ) || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) )){
                                    var osqm_verification_correction = "<a class='dropdown-item for-osqm-verification-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.5 Correction - For Verification</a>";
                                }
                            }


                            if(section != ''){
                                if(corrective_action_status == 'For Verification' && ( ( userrole == "dqt_member" && section == userdepartmentsection ) || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) )){
                                    var osqm_verification_corrective_action = "<a class='dropdown-item for-osqm-verification-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.5 Corrective Action - For Verification</a>";
                                }
                            } else {
                                if(corrective_action_status == 'For Verification' && (  ( userrole == "dqt_member" && issued_to == userdepartment ) || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) )){
                                    var osqm_verification_corrective_action = "<a class='dropdown-item for-osqm-verification-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.5 Corrective Action - For Verification</a>";
                                }
                            }

                            if(section != ''){
                                if(for_correction_status == 'For Validation' && ( userrole == "osqm_qmr" || (userrole == "lead_auditor" && usersection == "internal_quality_audit") || (userrole == "dqt_member" && section == userdepartmentsection ) || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) )){
                                    var osqm_validation_correction = "<a class='dropdown-item for-osqm-validation-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.6 Correction - For Validation</a>";
                                }
                            } else {
                                if(for_correction_status == 'For Validation' && ( userrole == "osqm_qmr" || (userrole == "lead_auditor" && usersection == "internal_quality_audit") || (userrole == "dqt_member" && issued_to == userdepartment ) || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) )){
                                    var osqm_validation_correction = "<a class='dropdown-item for-osqm-validation-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.6 Correction - For Validation</a>";
                                }
                            }


                            if(section != ''){
                                if(corrective_action_status == 'For Validation'  && ( userrole == "osqm_qmr" || (userrole == "lead_auditor" && usersection == "internal_quality_audit") || (userrole == "dqt_member" && section == userdepartmentsection ) || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) )){
                                    var osqm_validation_corrective_action = "<a class='dropdown-item for-osqm-validation-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.6 Corrective Action - For Validation</a>";
                                }
                            } else {
                                if(corrective_action_status == 'For Validation' && ( userrole == "osqm_qmr" || (userrole == "lead_auditor" && usersection == "internal_quality_audit") || (userrole == "dqt_member" && issued_to == userdepartment ) || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) )){
                                    var osqm_validation_corrective_action = "<a class='dropdown-item for-osqm-validation-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.6 Corrective Action - For Validation</a>";
                                }
                            }
                        }

                        if(source == "8"){

                            if(section != ''){
                                if(for_correction_status == 'For Verification' && ( (userrole == "chair" && usersection == "customer_satisfaction_committee") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) )){
                                    var osqm_verification_correction = "<a class='dropdown-item for-osqm-verification-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.5 Correction - For Verification</a>";
                                }
                            } else {
                                if(for_correction_status == 'For Verification' && ( (userrole == "chair" && usersection == "customer_satisfaction_committee") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) )){
                                    var osqm_verification_correction = "<a class='dropdown-item for-osqm-verification-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.5 Correction - For Verification</a>";
                                }
                            }


                            if(section != ''){
                                if(corrective_action_status == 'For Verification' && ( (userrole == "chair" && usersection == "customer_satisfaction_committee") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) )){
                                    var osqm_verification_corrective_action = "<a class='dropdown-item for-osqm-verification-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.5 Corrective Action - For Verification</a>";
                                }
                            } else {
                                if(corrective_action_status == 'For Verification' && ( (userrole == "chair" && usersection == "customer_satisfaction_committee") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) )){
                                    var osqm_verification_corrective_action = "<a class='dropdown-item for-osqm-verification-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.5 Corrective Action - For Verification</a>";
                                }
                            }

                            if(section != ''){
                                if(for_correction_status == 'For Validation' && ( userrole == "osqm_qmr" || (userrole == "lead_auditor" && usersection == "internal_quality_audit") || (userrole == "chair" && usersection == "customer_satisfaction_committee") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) )){
                                    var osqm_validation_correction = "<a class='dropdown-item for-osqm-validation-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.6 Correction - For Validation</a>";
                                }
                            } else {
                                if(for_correction_status == 'For Validation' && ( userrole == "osqm_qmr" || (userrole == "lead_auditor" && usersection == "internal_quality_audit") || (userrole == "chair" && usersection == "customer_satisfaction_committee") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) )){
                                    var osqm_validation_correction = "<a class='dropdown-item for-osqm-validation-correction' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.6 Correction - For Validation</a>";
                                }
                            }

                            if(section != ''){
                                if(corrective_action_status == 'For Validation'  && ( userrole == "osqm_qmr" || (userrole == "lead_auditor" && usersection == "internal_quality_audit") || (userrole == "chair" && usersection == "customer_satisfaction_committee") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) )){
                                    var osqm_validation_corrective_action = "<a class='dropdown-item for-osqm-validation-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.6 Corrective Action - For Validation</a>";
                                }
                            } else {
                                if(corrective_action_status == 'For Validation' && ( userrole == "osqm_qmr" || (userrole == "lead_auditor" && usersection == "internal_quality_audit") || (userrole == "chair" && usersection == "customer_satisfaction_committee") || userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) )){
                                    var osqm_validation_corrective_action = "<a class='dropdown-item for-osqm-validation-corrective-action' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.6 Corrective Action - For Validation</a>";
                                }
                            }

                        }


                        if(corrective_action_status == 'For Closure' && for_correction_status == 'For Closure' && userrole == "osqm_qmr" ){
                            var osqm_validation_correction_closing = "<a class='dropdown-item edit-closing' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#closing'>Closing</a>";
                        }

                        if(corrective_action_status == 'Closed' && for_correction_status == 'Closed'){
                            var osqm_validation_correction_closing = "<a class='dropdown-item edit-closed' href='#' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#closing'>CAR</a>";
                        }

                        if(status == "For Issuance of NC" && ( userrole == "osqm_dco" || userrole == "osqm_do" || userrole == "div_chief")){
                            var issuance_of_nc_html = "<a class='dropdown-item edit-car' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#add-car-issuance'>Issuance of NC</a>";
                        } else {
                            var issuance_of_nc_html = "";
                        }
                        

                        if(section != ''){

                            // console.log(userrole);
                            // console.log(section);
                            // console.log(userdepartmentsection);
                            // console.log(for_correction_status);
                            
                            if((for_correction_status == "For CAR action" || for_correction_status == "For Implementation" ||  for_correction_status == 'For Revision') && ( userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "section_head" && section == userdepartmentsection ) ) ){
                                var for_action_html_correction = "<a class='dropdown-item edit-correction-action' href='#' data-correction_status='"+for_correction_status+"' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.2 Correction</a>";
                            } else {
                                var for_action_html_correction = "";
                            }
                        } else {
                            if((for_correction_status == "For CAR action" || for_correction_status == "For Implementation" ||  for_correction_status == 'For Revision') && ( userrole == "osqm_dco" || userrole == "osqm_do" ||  userrole == "div_chief" || ( userrole == "department_head" && issued_to == userdepartment ) ) ){
                                var for_action_html_correction = "<a class='dropdown-item edit-correction-action' href='#' data-correction_status='"+for_correction_status+"' data-userrole='"+userrole+"' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>SEC.2 Correction</a>";
                            } else {
                                var for_action_html_correction = "";
                            }
                        }

                        var for_action_html_corrective = "";

                        if (section != '') {
                            if ((corrective_action_status == "For CAR action" || corrective_action_status == "For Implementation" || corrective_action_status == "For Partial" ||  corrective_action_status == 'For Revision') && (userrole == "osqm_dco" || userrole == "osqm_do" || userrole == "div_chief" || (userrole == "section_head" && section == userdepartmentsection))) {
                                for_action_html_corrective = "<a class='dropdown-item edit-corrective-action' data-partial='no' data-corrective_status='" + corrective_action_status + "' href='#' data-userrole='" + userrole + "' data-status='" + status + "' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.3&4 Corrective Action</a>";
                            }
                        } else {
                            if ((corrective_action_status == "For CAR action" || corrective_action_status == "For Implementation" || corrective_action_status == "For Partial" ||  corrective_action_status == 'For Revision') && (userrole == "osqm_dco" || userrole == "osqm_do" || userrole == "div_chief" || (userrole == "department_head" && issued_to == userdepartment))) {
                                for_action_html_corrective = "<a class='dropdown-item edit-corrective-action' data-partial='no' data-corrective_status='" + corrective_action_status + "' href='#' data-userrole='" + userrole + "' data-status='" + status + "' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.3&4 Corrective Action</a>";
                            }
                        }

                        if (corrective_action_status == 'For CAR action' || corrective_action_status == "For Implementation" || corrective_action_status == "For Partial" || corrective_action_status == 'For Revision') {
                            $.ajax({
                                type: 'POST',
                                url: '../car/getCorrectiveAction',
                                data: {
                                    car_id: car_id
                                },
                                success: function(response) {
                                    if (response != 'null') {
                                        response = JSON.parse(response);
                                        if (response[0]) {
                                            var identifiedRootEntries = JSON.parse(response[0].identified_root_entry);
                                            identifiedRootEntries.forEach(function(identifiedRoot) {
                                                var tpn_control = identifiedRoot.tpn_control;
                                                if (tpn_control == 'no' || tpn_control == 'partial') {
                                                    var tpn_issued_to = identifiedRoot.tpn_issued_to;
                                                    var tpn_section = identifiedRoot.tpn_section;

                                                    if (tpn_section != '') {
                                                        if ((corrective_action_status == "For CAR action" || corrective_action_status == "For Implementation" || corrective_action_status == "For Partial") && (userrole == "section_head" && tpn_section == userdepartmentsection)) {
                                                            for_action_html_corrective = "<a class='dropdown-item edit-corrective-action' data-partial='yes' data-corrective_status='" + corrective_action_status + "' href='#' data-userrole='" + userrole + "' data-status='" + status + "' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.3&4 Corrective Action</a>";
                                                        }
                                                    } else {
                                                        if ((corrective_action_status == "For CAR action" || corrective_action_status == "For Implementation" || corrective_action_status == "For Partial") && (userrole == "department_head" && tpn_issued_to == userdepartment)) {
                                                            for_action_html_corrective = "<a class='dropdown-item edit-corrective-action' data-partial='yes' data-corrective_status='" + corrective_action_status + "' href='#' data-userrole='" + userrole + "' data-status='" + status + "' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>SEC.3&4 Corrective Action</a>";
                                                        }
                                                    }

                                                    
                                                } 
                                            });

                                                     var html = "<tr><td>" + car_id + 
                                                    "<td>" + car_no + 
                                                    "</td><td>" + source_name + 
                                                    "</td><td>" + issued_by_name + 
                                                    "</td><td>" + issued_to_name + 
                                                    "</td><td>" + identification_date + 
                                                    "</td><td>" + registration_date + 
                                                    "</td><td>" + date_closed + 
                                                    "</td><td>" + for_correction_status + "<br><small>" + fc_completion_date + " (due date)</small>" +
                                                    "</td><td>" + corrective_action_status + "<br><small>" + ca_completion_date + " (due date)</small>" +
                                                    "</td><td>" + status +
                                                    "</td><td>" +
                                                    "<div class='btn-group mb-2'>" +
                                                    "<button type='button' class='btn btn-success dropdown-toggle' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><i class='fa fa-file'></i> <i class='mdi mdi-chevron-down'></i></button>" +
                                                    "<div class='dropdown-menu'>" +
                                                    issuance_of_nc_html+
                                                    "<a class='dropdown-item' href='#'>History</a>" +
                                                    for_action_html_corrective +
                                                    for_action_html_correction +
                                                    osqm_review_correction +
                                                    osqm_review_corrective_action +
                                                    osqm_approval_correction+
                                                    osqm_verification_correction+
                                                    osqm_validation_correction+
                                                    osqm_approval_corrective_action +
                                                    osqm_verification_corrective_action +
                                                    osqm_validation_corrective_action +
                                                    osqm_validation_correction_closing +
                                                    "</div>" +
                                                    "</div>" +
                                                    "</td></tr>";
                                                    // Do something with the data, for example, display it on the page
                                                    $('#car-global-datatable tbody').append(html);



                                        } else {
                                                var html = "<tr><td>" + car_id + 
                                                "<td>" + car_no + 
                                                "</td><td>" + source_name + 
                                                "</td><td>" + issued_by_name + 
                                                "</td><td>" + issued_to_name + 
                                                "</td><td>" + identification_date + 
                                                "</td><td>" + registration_date + 
                                                "</td><td>" + date_closed + 
                                                "</td><td>" + for_correction_status + "<br><small>" + fc_completion_date + " (due date)</small>" +
                                                "</td><td>" + corrective_action_status + "<br><small>" + ca_completion_date + " (due date)</small>" +
                                                "</td><td>" + status +
                                                "</td><td>" +
                                                "<div class='btn-group mb-2'>" +
                                                "<button type='button' class='btn btn-success dropdown-toggle' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><i class='fa fa-file'></i> <i class='mdi mdi-chevron-down'></i></button>" +
                                                "<div class='dropdown-menu'>" +
                                                issuance_of_nc_html+
                                                "<a class='dropdown-item' href='#'>History</a>" +
                                                for_action_html_corrective +
                                                for_action_html_correction +
                                                osqm_review_correction +
                                                osqm_review_corrective_action +
                                                osqm_approval_correction+
                                                osqm_verification_correction+
                                                osqm_validation_correction+
                                                osqm_approval_corrective_action +
                                                osqm_verification_corrective_action +
                                                osqm_validation_corrective_action +
                                                osqm_validation_correction_closing +
                                                "</div>" +
                                                "</div>" +
                                                "</td></tr>";
                                                // Do something with the data, for example, display it on the page
                                                $('#car-global-datatable tbody').append(html);
                                        }
                                    } else {
                                                var html = "<tr><td>" + car_id + 
                                                "<td>" + car_no + 
                                                "</td><td>" + source_name + 
                                                "</td><td>" + issued_by_name + 
                                                "</td><td>" + issued_to_name + 
                                                "</td><td>" + identification_date + 
                                                "</td><td>" + registration_date + 
                                                "</td><td>" + date_closed + 
                                                "</td><td>" + for_correction_status + "<br><small>" + fc_completion_date + " (due date)</small>" +
                                                "</td><td>" + corrective_action_status + "<br><small>" + ca_completion_date + " (due date)</small>" +
                                                "</td><td>" + status +
                                                "</td><td>" +
                                                "<div class='btn-group mb-2'>" +
                                                "<button type='button' class='btn btn-success dropdown-toggle' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><i class='fa fa-file'></i> <i class='mdi mdi-chevron-down'></i></button>" +
                                                "<div class='dropdown-menu'>" +
                                                issuance_of_nc_html+
                                                "<a class='dropdown-item' href='#'>History</a>" +
                                                for_action_html_corrective +
                                                for_action_html_correction +
                                                osqm_review_correction +
                                                osqm_review_corrective_action +
                                                osqm_approval_correction+
                                                osqm_verification_correction+
                                                osqm_validation_correction+
                                                osqm_approval_corrective_action +
                                                osqm_verification_corrective_action +
                                                osqm_validation_corrective_action +
                                                osqm_validation_correction_closing +
                                                "</div>" +
                                                "</div>" +
                                                "</td></tr>";
                                                // Do something with the data, for example, display it on the page
                                                $('#car-global-datatable tbody').append(html);
                                    }
                                },
                                error: function() {
                                    // Handle errors
                                    diList.notifyError();
                                }
                            });
                        } else {
                            var html = "<tr><td>" + car_id + 
                            "<td>" + car_no + 
                            "</td><td>" + source_name + 
                            "</td><td>" + issued_by_name + 
                            "</td><td>" + issued_to_name + 
                            "</td><td>" + identification_date + 
                            "</td><td>" + registration_date + 
                            "</td><td>" + date_closed + 
                            "</td><td>" + for_correction_status + "<br><small>" + fc_completion_date + " (due date)</small>" +
                            "</td><td>" + corrective_action_status + "<br><small>" + ca_completion_date + " (due date)</small>" +
                            "</td><td>" + status +
                            "</td><td>" +
                            "<div class='btn-group mb-2'>" +
                            "<button type='button' class='btn btn-success dropdown-toggle' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><i class='fa fa-file'></i> <i class='mdi mdi-chevron-down'></i></button>" +
                            "<div class='dropdown-menu'>" +
                            issuance_of_nc_html+
                            "<a class='dropdown-item' href='#'>History</a>" +
                            for_action_html_corrective +
                            for_action_html_correction +
                            osqm_review_correction +
                            osqm_review_corrective_action +
                            osqm_approval_correction+
                            osqm_verification_correction+
                            osqm_validation_correction+
                            osqm_approval_corrective_action +
                            osqm_verification_corrective_action +
                            osqm_validation_corrective_action +
                            osqm_validation_correction_closing +
                            "</div>" +
                            "</div>" +
                            "</td></tr>";
                            // Do something with the data, for example, display it on the page
                            $('#car-global-datatable tbody').append(html);
                        }


                        

                    });

                    setTimeout(function(){
                        tippy('*[data-plugin="tippy"]');

                        $("#car-global-datatable").DataTable({
                            language: {
                                paginate: {
                                    previous: "<i class='mdi mdi-chevron-left'>",
                                    next: "<i class='mdi mdi-chevron-right'>"
                                }
                            },
                            drawCallback: function () {
                                $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
                            },
                            order: [[0, 'desc']] // Sort by the first column in descending order
                        });
    
                        $('[data-toggle="tooltip"]').tooltip()

                    }, 3000)
                    
                }
            },
            error: function () {
                // Handle errors
                car.notifyError();
            }
        });
    },

    loadDepartment : function(){
        jQuery('#source').change(function(){
            source = jQuery(this).val();

            division = jQuery('#issued_by').val();

            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){

                        $('#issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;
    
                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('#issued_to').append(html);
                        });

                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });

        }); 

        jQuery('#issued_by').change(function(){
            division = jQuery(this).val();

            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){

                        $('#issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;
    
                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('#issued_to').append(html);
                        });

                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
        });

        jQuery('#issued_to').change(function(){
            department = $(this).val();
            $.ajax({
                type: 'POST',
                url: '../car/getSection', // Replace 'MyController' with your controller name
                data: {department: department},
                success: function (response) {
                    if(response != 'null'){

                        $('#section').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var section_name = item.section_name;
    
                            var html = '<option value="'+id+'">'+section_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('#section').append(html);
                        });

                       
                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
        });

        jQuery('#addCARFormIssuance .issued_to').change(function(){
            department = $(this).val();
            $.ajax({
                type: 'POST',
                url: '../car/getSection', // Replace 'MyController' with your controller name
                data: {department: department},
                success: function (response) {
                    if(response != 'null'){

                        $('#addCARFormIssuance .section').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var section_name = item.section_name;
    
                            var html = '<option value="'+id+'">'+section_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('#addCARFormIssuance .section').append(html);
                        });

                       
                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
        });
    },

    loadCorrectiveAction: function(){

        $('#car-global-datatable').on('click', '.edit-correction-action', function () {

            if(jQuery(this).data('userrole') == "osqm_dco" || jQuery(this).data('userrole') == 'osqm_do' || jQuery(this).data('userrole') == 'div_chief'){
                jQuery('#saveCorrection').addClass('hidden');
            } else {
                jQuery('#saveCorrection').removeClass('hidden');
            }
        
            if(jQuery(this).data('correction_status') == "For CAR action" || jQuery(this).data('correction_status') == "For Revision"){
                jQuery('#add-correction').removeClass('hidden');
                jQuery('#add-consequences').removeClass('hidden');
            } else {
                jQuery('#add-correction').addClass('hidden');
                jQuery('#add-consequences').addClass('hidden');
            }
        
            jQuery('#car-correction-action').html('');
        
            jQuery('#car-correction-action').removeClass();
            jQuery('#car-correction-action').addClass('mt-4');
            jQuery('#car-correction-action').addClass('row');
            jQuery('#car-correction-action').addClass('correction-action');
        
            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            
        
            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
        
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
        
            division = jQuery('.addCARFormIssuance .issued_by').val();
        
            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){
        
                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;
        
                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });
        
                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);
        
                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });
        
                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
        
            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#correction').empty();
            $('#consequencesdiv').empty();
        
            var correction_action = jQuery(this).data('correction_status');
            
            $.ajax({
                type: 'POST',
                url: '../car/getCorrectionAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != '[]'){
        
                        response = JSON.parse(response);
        
                        console.log(response);
        
                        var correctionEntries = JSON.parse(response[0].correction_entry);
                        var count = 0;
                        // Loop through correction entries and create HTML for each entry
                        correctionEntries.forEach(function (correction) {
                            var correctionHtml = `
                                <div class="col-lg-12 correction-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-12">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Correction</label>
                                                            <textarea class="form-control" name="correction[${count}]" rows="4">${correction.correction}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="correction_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${correction.correction_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="correction_completion_date[${count}]" value="${correction.correction_completion_date}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6 mt-2">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="correction_person_responsible_url[${count}]" value="${correction.correction_person_responsible_url}">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
        
                            count++;
                            // Append the correction HTML to the container
                            $('#correction').append(correctionHtml);
                        });
        
                        var consequenceEntries = JSON.parse(response[0].consequence_entry);
                        var count = 0;
                        // Loop through correction entries and create HTML for each entry
                        consequenceEntries.forEach(function (consequence) {
        
                            var consequenceHtml = `
                                <div class="col-lg-12 consequences-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-12">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Dealing with the consequences</label>
                                                            <textarea class="form-control" name="consequence[${count}]" rows="4">${consequence.consequence}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="consequence_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${consequence.consequence_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="consequence_completion_date[${count}]" value="${consequence.consequence_completion_date}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6 mt-2">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="consequence_person_responsible_url[${count}]" value="${consequence.consequence_person_responsible_url}">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            count++
                            // Append the correction HTML to the container
                            $('#consequencesdiv').append(consequenceHtml);
                        });
        
                    } else {
                        // car.notifyError();
                    }   
        
                    if(correction_action == "For CAR action"){ 
        
                        var correctionHtmlLast = `
                            <div class="col-lg-12 correction-repeatable">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <div class="row">
                                                <div class="col-xl-12">
                                                    <div class="mb-3 mb-xl-0">
                                                        <label for="exampleInputEmail1" class="form-label">Correction</label>
                                                        <textarea class="form-control" name="correction[]" rows="4"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4">
                                                    <div class="mb-3 mb-xl-0">
                                                        <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                        <input type="text" class="form-control" name="correction_person_responsible[]" placeholder="Enter Name of personnel" value="">
                                                    </div>
                                                </div>
                                                <div class="col-xl-4">
                                                    <div class="mb-3 mb-xl-0">
                                                        <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                        <input type="date" class="form-control" name="correction_completion_date[]" value="">
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 mt-2">
                                                    <div class="mb-3 mb-xl-0">
                                                        <label class="form-label">File URL</label>
                                                        <input type="text" class="form-control selectize-close-btn" readonly name="correction_person_responsible_url[]" value="">
                                                    </div>
                                                </div>
                                                <div class="col-xl-1">
                                                    <div class="mb-3 mb-xl-0">
                                                        <label for="exampleInputEmail1" class="form-label">Remove</label>
                                                        <button type="button" class="btn btn-danger remove-corrective-action"><i class="fas fa-trash"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
            
                        $('#correction').append(correctionHtmlLast);
            
                        var consequenceHtmlLast = `
                                <div class="col-lg-12 consequences-repeatable">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-12">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Dealing with the consequences</label>
                                                            <textarea class="form-control" name="consequence[]" rows="4"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" name="consequence_person_responsible[]" placeholder="Enter Name of personnel" value="">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" name="consequence_completion_date[]" value="">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6 mt-2">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="consequence_person_responsible_url[]" value="">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-1">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Remove</label>
                                                            <button type="button" class="btn btn-danger remove-consequences-action"><i class="fas fa-trash"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        `;
            
                        $('#consequencesdiv').append(consequenceHtmlLast);
                    
                    }
        
                    setTimeout(function() {
                        jQuery(".selectize-close-btn").selectize({
                            plugins: ["remove_button"],
                            persist: !1,
                            create: !0,
                            render: {
                                item: function (e, a) {
                                    return '<div><a class="url_link" target="_blank" href="' + a(e.text) + '">"' + a(e.text) + '"</a></div>';
                                },
                            },
                            onDelete: function (e) {
                                return confirm(1 < e.length ? "Are you sure you want to remove these " + e.length + " items?" : 'Are you sure you want to remove "' + e[0] + '"?');
                            },
                        });

                        jQuery('.url_link').click(function(){
                            url = jQuery(this).attr('href');
                            window.open(url, '_blank');
                        });
                    }, 1000);
            
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        
        });
        
        $('#car-global-datatable').on('click', '.for-osqm-review-correction', function () {
            
            if(jQuery(this).data('userrole') == "department_head" || jQuery(this).data('userrole') == "section_head" || jQuery(this).data('userrole') == 'div_chief'){
                jQuery('#saveCorrection').addClass('hidden');
            } else {
                jQuery('#saveCorrection').removeClass('hidden');
            }
        
            var $action = '<div class="row mb-2">' +
                '<div class="form-group col-md-12">' +
                '<label for="review_correction_dealing_with_consequences" class="form-label">Review of Correction and Dealing with the Consequences</label>' +
                '<select class="form-select review_correction_dealing_with_consequences" name="review_correction_dealing_with_consequences">' +
                    '<option value="For Approval">For Approval</option>' +
                    '<option value="For Revision">For Revision</option>' +
                '</select>' +
                '</div>' +
            '</div>' +
            '<div class="row mb-2">' +
                '<div class="form-group col-md-12">' +
                '<label for="review_correction_dealing_with_consequences_remarks" class="form-label">Remarks </label>' +
                '<textarea class="form-control review_correction_dealing_with_consequences_remarks" name="review_correction_dealing_with_consequences_remarks" rows="4"></textarea>' +
                '</div>' +
            '</div>';
            
            jQuery('#car-correction-action').html($action);
        
            jQuery('#car-correction-action').removeClass();
            jQuery('#car-correction-action').addClass('mt-4');
            jQuery('#car-correction-action').addClass('row');
            jQuery('#car-correction-action').addClass('correction-action-review');
        
            jQuery('#add-correction').addClass('hidden');
            jQuery('#add-consequences').addClass('hidden');
            
            
            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            
            
            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
            
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            
            division = jQuery('.addCARFormIssuance .issued_by').val();
            
            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){
            
                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;
            
                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });
            
                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);
            
                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });
            
                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
            
            
            
            
            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#correction').empty();
            $('#consequencesdiv').empty();
            
            $.ajax({
                type: 'POST',
                url: '../car/getCorrectionAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != '[]'){
            
                        response = JSON.parse(response);
        
                        var review_correction_dealing_with_consequences = response[0].review_correction_dealing_with_consequences;
                        var review_correction_dealing_with_consequences_remarks = response[0].review_correction_dealing_with_consequences_remarks;
        
                        
                        jQuery('.review_correction_dealing_with_consequences').val(review_correction_dealing_with_consequences);
                        jQuery('.review_correction_dealing_with_consequences_remarks').val(review_correction_dealing_with_consequences_remarks);
            
                        console.log(response);
            
                        var correctionEntries = JSON.parse(response[0].correction_entry);
                        var count = 0;
                        // Loop through correction entries and create HTML for each entry
                        correctionEntries.forEach(function (correction) {
            
                            var reviewValue = correction.correction_acceptable_review !== undefined ? correction.correction_acceptable_review : ''; // Added
                            var remarksReview = correction.correction_acceptable_remarks_review !== undefined ? correction.correction_acceptable_remarks_review : ''; // Added
            
                            var correctionHtml = `
                                <div class="col-lg-12 correction-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-12">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Correction</label>
                                                            <textarea class="form-control" name="correction[${count}]" rows="4">${correction.correction}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="correction_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${correction.correction_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="correction_completion_date[${count}]" value="${correction.correction_completion_date}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6 mt-2">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="correction_person_responsible_url[${count}]" value="${correction.correction_person_responsible_url}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">Acceptable</label>
                                                    <div class="col-lg-3 text-inlign mb-2">
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="correction_acceptable_review[${count}]" value="1" class="form-check-input" ${reviewValue === '1' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_review">YES</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="correction_acceptable_review[${count}]" value="0" class="form-check-input" ${reviewValue === '0' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_review">NO</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label for="correction_acceptable_remarks_review" class="form-label">Remarks</label>
                                                        <textarea class="form-control" name="correction_acceptable_remarks_review[${count}]" rows="4">${remarksReview}</textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
            
                            count++;
                            // Append the correction HTML to the container
                            $('#correction').append(correctionHtml);
                        });
            
                        var consequenceEntries = JSON.parse(response[0].consequence_entry);
                        var count = 0;
                        // Loop through correction entries and create HTML for each entry
                        consequenceEntries.forEach(function (consequence) {
            
                            
                            var reviewValue = consequence.consequence_acceptable_review !== undefined ? consequence.consequence_acceptable_review : ''; // Added
                            var remarksReview = consequence.consequence_acceptable_remarks_review !== undefined ? consequence.consequence_acceptable_remarks_review : '';
            
                            var consequenceHtml = `
                                <div class="col-lg-12 consequences-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-12">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Dealing with the consequences</label>
                                                            <textarea class="form-control" name="consequence[${count}]" rows="4">${consequence.consequence}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="consequence_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${consequence.consequence_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="consequence_completion_date[${count}]" value="${consequence.consequence_completion_date}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6 mt-2">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="consequence_person_responsible_url[${count}]" value="${consequence.consequence_person_responsible_url}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">Acceptable</label>
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="consequence_acceptable_review[${count}]" value="1" class="form-check-input" ${reviewValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_review">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="consequence_acceptable_review[${count}]" value="0" class="form-check-input" ${reviewValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_review">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="consequence_acceptable_remarks_review" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="consequence_acceptable_remarks_review[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            count++;
                            // Append the correction HTML to the container
                            $('#consequencesdiv').append(consequenceHtml);
        
                            setTimeout(function() {
                                jQuery(".selectize-close-btn").selectize({
                                    plugins: ["remove_button"],
                                    persist: !1,
                                    create: !0,
                                    render: {
                                        item: function (e, a) {
                                            return '<div><a class="url_link" target="_blank" href="' + a(e.text) + '">"' + a(e.text) + '"</a></div>';
                                        },
                                    },
                                    onDelete: function (e) {
                                        return confirm(1 < e.length ? "Are you sure you want to remove these " + e.length + " items?" : 'Are you sure you want to remove "' + e[0] + '"?');
                                    },
                                });
                                jQuery('.url_link').click(function(){
                                    url = jQuery(this).attr('href');
                                    window.open(url, '_blank');
                                });
                            }, 1000);
                        });
            
                    } else {
                        // car.notifyError();
                    }   
                    
            
            
            
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
            
        });
        
        $('#car-global-datatable').on('click', '.for-osqm-approval-correction', function () {

            if(jQuery(this).data('userrole') == "department_head" || jQuery(this).data('userrole') == "section_head" || jQuery(this).data('userrole') == 'osqm_dco' || jQuery(this).data('userrole') == 'osqm_do'){
                jQuery('#saveCorrection').addClass('hidden');
            } else {
                jQuery('#saveCorrection').removeClass('hidden');
            }

            var $action = '<div class="row mb-2">' +
                '<div class="form-group col-md-12">' +
                '<label for="approval_correction_dealing_with_consequences" class="form-label">Review of Correction and Dealing with the Consequences</label>' +
                '<select class="form-select approval_correction_dealing_with_consequences" name="approval_correction_dealing_with_consequences">' +
                    '<option value="For Implementation">For Implementation</option>' +
                    '<option value="For Revision">For Revision</option>' +
                '</select>' +
                '</div>' +
            '</div>' +
            '<div class="row mb-2">' +
                '<div class="form-group col-md-12">' +
                '<label for="approval_correction_dealing_with_consequences_remarks" class="form-label">Remarks </label>' +
                '<textarea class="form-control approval_correction_dealing_with_consequences_remarks" name="approval_correction_dealing_with_consequences_remarks" rows="4"></textarea>' +
                '</div>' +
            '</div>';
            
            jQuery('#car-correction-action').html($action);
        
            jQuery('#car-correction-action').removeClass();
            jQuery('#car-correction-action').addClass('mt-4');
            jQuery('#car-correction-action').addClass('row');
            jQuery('#car-correction-action').addClass('correction-action-approval');
        
            jQuery('#add-correction').addClass('hidden');
            jQuery('#add-consequences').addClass('hidden');
            
            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            
            
            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
            
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            
            division = jQuery('.addCARFormIssuance .issued_by').val();
            
            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){
            
                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;
            
                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });
            
                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);
            
                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });
            
                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
            
            
            
            
            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#correction').empty();
            $('#consequencesdiv').empty();
            
            $.ajax({
                type: 'POST',
                url: '../car/getCorrectionAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != '[]'){
            
                        response = JSON.parse(response);
        
                        var approval_correction_dealing_with_consequences = response[0].approval_correction_dealing_with_consequences;
                        var approval_correction_dealing_with_consequences_remarks = response[0].approval_correction_dealing_with_consequences_remarks;
        
                        
                        jQuery('.approval_correction_dealing_with_consequences').val(approval_correction_dealing_with_consequences);
                        jQuery('.approval_correction_dealing_with_consequences_remarks').val(approval_correction_dealing_with_consequences_remarks);
            
                        console.log(response);
            
                        var correctionEntries = JSON.parse(response[0].correction_entry);
                        var count = 0;
                        // Loop through correction entries and create HTML for each entry
                        correctionEntries.forEach(function (correction) {
        
                            var approvalValue = correction.correction_acceptable_approval !== undefined ? correction.correction_acceptable_approval : ''; // Added
                            var remarksReview = correction.correction_acceptable_remarks_approval !== undefined ? correction.correction_acceptable_remarks_approval : '';
            
                            var correctionHtml = `
                                <div class="col-lg-12 correction-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-12">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Correction</label>
                                                            <textarea class="form-control" name="correction[${count}]" rows="4">${correction.correction}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="correction_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${correction.correction_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="correction_completion_date[${count}]" value="${correction.correction_completion_date}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6 mt-2">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="correction_person_responsible_url[${count}]" value="${correction.correction_person_responsible_url}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">Acceptable</label>
        
                                                    <div class="col-lg-3 text-inlign mb-2">
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="correction_acceptable_approval[${count}]" value="1" class="form-check-input" ${approvalValue === '1' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_approval">YES</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="correction_acceptable_approval[${count}]" value="0" class="form-check-input" ${approvalValue === '0' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_approval">NO</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label for="correction_acceptable_remarks_approval" class="form-label">Remarks</label>
                                                        <textarea class="form-control" name="correction_acceptable_remarks_approval[${count}]" rows="4">${remarksReview}</textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
            
                            count++;
                            // Append the correction HTML to the container
                            $('#correction').append(correctionHtml);
                        });
            
                        var consequenceEntries = JSON.parse(response[0].consequence_entry);
                        var count = 0;
                        // Loop through correction entries and create HTML for each entry
                        consequenceEntries.forEach(function (consequence) {
            
                            
                            var approvalValue = consequence.consequence_acceptable_approval !== undefined ? consequence.consequence_acceptable_approval : ''; // Added
                            var remarksReview = consequence.consequence_acceptable_remarks_approval !== undefined ? consequence.consequence_acceptable_remarks_approval : ''; // Added
            
                            var consequenceHtml = `
                                <div class="col-lg-12 consequences-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-12">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Dealing with the consequences</label>
                                                            <textarea class="form-control" name="consequence[${count}]" rows="4">${consequence.consequence}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="consequence_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${consequence.consequence_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="consequence_completion_date[${count}]" value="${consequence.consequence_completion_date}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6 mt-2">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="consequence_person_responsible_url[${count}]" value="${consequence.consequence_person_responsible_url}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">Acceptable</label>
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="consequence_acceptable_approval[${count}]" value="1" class="form-check-input" ${approvalValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_approval">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="consequence_acceptable_approval[${count}]" value="0" class="form-check-input" ${approvalValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_approval">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="consequence_acceptable_remarks_approval" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="consequence_acceptable_remarks_approval[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            count++;
                            // Append the correction HTML to the container
                            $('#consequencesdiv').append(consequenceHtml);
        
                            setTimeout(function() {
                                jQuery(".selectize-close-btn").selectize({
                                    plugins: ["remove_button"],
                                    persist: !1,
                                    create: !0,
                                    render: {
                                        item: function (e, a) {
                                            return '<div><a class="url_link" target="_blank" href="' + a(e.text) + '">"' + a(e.text) + '"</a></div>';
                                        },
                                    },
                                    onDelete: function (e) {
                                        return confirm(1 < e.length ? "Are you sure you want to remove these " + e.length + " items?" : 'Are you sure you want to remove "' + e[0] + '"?');
                                    },
                                });

                                jQuery('.url_link').click(function(){
                                    url = jQuery(this).attr('href');
                                    window.open(url, '_blank');
                                });
                            }, 1000);
                        });
            
                    } else {
                        // car.notifyError();
                    }   
                    
            
            
            
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
            
        });
        
        $('#car-global-datatable').on('click', '.for-osqm-verification-correction', function () {

            var source = jQuery(this).data('source');

            if(source == '1' || source == '8'){
                if(jQuery(this).data('userrole') == "chair"){
                    jQuery('#saveCorrection').removeClass('hidden');
                } else {
                    jQuery('#saveCorrection').addClass('hidden');
                }
            } 

            if(source == '2'){
                if(jQuery(this).data('userrole') == "auditor"){
                    jQuery('#saveCorrection').removeClass('hidden');
                } else {
                    jQuery('#saveCorrection').addClass('hidden');
                }
            }

            if(source == '3' || source == '4' || source == '5' || source == '6' || source == '7'){
                if(jQuery(this).data('userrole') == "dqt_member"){
                    jQuery('#saveCorrection').removeClass('hidden');
                } else {
                    jQuery('#saveCorrection').addClass('hidden');
                }
            }

            jQuery('#add-correction').addClass('hidden');
            jQuery('#add-consequences').addClass('hidden');
        
            var $action = '<div class="row mb-2">' +
                '<div class="form-group col-md-12">' +
                '<label for="verification_correction_dealing_with_consequences" class="form-label">Verification of Correction of Nonconformity and Dealing with the Consequences</label>' +
                '<select class="form-select verification_correction_dealing_with_consequences" name="verification_correction_dealing_with_consequences">' +
                    '<option value="For Validation">For Validation</option>' +
                    '<option value="For Revision">For Revision</option>' +
                '</select>' +
                '</div>' +
            '</div>' +
            '<div class="row mb-2">' +
                '<div class="form-group col-md-12">' +
                '<label for="verification_correction_dealing_with_consequences_remarks" class="form-label">Remarks </label>' +
                '<textarea class="form-control verification_correction_dealing_with_consequences_remarks" name="verification_correction_dealing_with_consequences_remarks" rows="4"></textarea>' +
                '</div>' +
            '</div>';
            
            jQuery('#car-correction-action').html($action);
        
            jQuery('#car-correction-action').removeClass();
            jQuery('#car-correction-action').addClass('mt-4');
            jQuery('#car-correction-action').addClass('row');
            jQuery('#car-correction-action').addClass('correction-action-verification');
            
            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            
            
            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
            
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            
            division = jQuery('.addCARFormIssuance .issued_by').val();
            
            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){
            
                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;
            
                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });
            
                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);
            
                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });
            
                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
            
            
            
            
            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#correction').empty();
            $('#consequencesdiv').empty();
            
            $.ajax({
                type: 'POST',
                url: '../car/getCorrectionAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != '[]'){
            
                        response = JSON.parse(response);
                        
                        var verification_correction_dealing_with_consequences = response[0].verification_correction_dealing_with_consequences;
                        var verification_correction_dealing_with_consequences_remarks = response[0].verification_correction_dealing_with_consequences_remarks;
        
                        
                        jQuery('.verification_correction_dealing_with_consequences').val(verification_correction_dealing_with_consequences);
                        jQuery('.verification_correction_dealing_with_consequences_remarks').val(verification_correction_dealing_with_consequences_remarks);
            
                        console.log(response);
            
                        var correctionEntries = JSON.parse(response[0].correction_entry);
                        var count = 0;
                        // Loop through correction entries and create HTML for each entry
                        correctionEntries.forEach(function (correction) {
        
                            var verificationValue = correction.correction_acceptable_verification !== undefined ? correction.correction_acceptable_verification : ''; // Added
                            var remarksReview = correction.correction_acceptable_remarks_verification !== undefined ? correction.correction_acceptable_remarks_verification : ''; 
            
                            var correctionHtml = `
                                <div class="col-lg-12 correction-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-12">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Correction</label>
                                                            <textarea class="form-control" name="correction[${count}]" rows="4">${correction.correction}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="correction_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${correction.correction_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="correction_completion_date[${count}]" value="${correction.correction_completion_date}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6 mt-2">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="correction_person_responsible_url[${count}]" value="${correction.correction_person_responsible_url}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">5.1 Was the nonconformity properly corrected?</label>
        
                                                    <div class="col-lg-3 text-inlign mb-2">
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="correction_acceptable_verification[${count}]" value="1" class="form-check-input" ${verificationValue === '1' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_verification">YES</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="correction_acceptable_verification[${count}]" value="0" class="form-check-input" ${verificationValue === '0' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_verification">NO</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label for="correction_acceptable_remarks_verification" class="form-label">Remarks</label>
                                                        <textarea class="form-control" name="correction_acceptable_remarks_verification[${count}]" rows="4">${remarksReview}</textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
            
                            count++;
                            // Append the correction HTML to the container
                            $('#correction').append(correctionHtml);
                        });
            
                        var consequenceEntries = JSON.parse(response[0].consequence_entry);
                        var count = 0;
                        // Loop through correction entries and create HTML for each entry
                        consequenceEntries.forEach(function (consequence) {
            
                            
                            var verificationValue = consequence.consequence_acceptable_verification !== undefined ? consequence.consequence_acceptable_verification : ''; // Added
                            var remarksReview = consequence.consequence_acceptable_remarks_verification !== undefined ? consequence.consequence_acceptable_remarks_verification : ''; // Added
        
                            var consequenceHtml = `
                                <div class="col-lg-12 consequences-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-12">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Dealing with the consequences</label>
                                                            <textarea class="form-control" name="consequence[${count}]" rows="4">${consequence.consequence}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="consequence_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${consequence.consequence_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="consequence_completion_date[${count}]" value="${consequence.consequence_completion_date}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6 mt-2">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="consequence_person_responsible_url[${count}]" value="${consequence.consequence_person_responsible_url}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">5.2 Was the consequences properly handled or treated?</label>
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="consequence_acceptable_verification[${count}]" value="1" class="form-check-input" ${verificationValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_verification">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="consequence_acceptable_verification[${count}]" value="0" class="form-check-input" ${verificationValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_verification">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="consequence_acceptable_remarks_verification" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="consequence_acceptable_remarks_verification[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            count++;
                            // Append the correction HTML to the container
                            $('#consequencesdiv').append(consequenceHtml);
        
                            setTimeout(function() {
                                jQuery(".selectize-close-btn").selectize({
                                    plugins: ["remove_button"],
                                    persist: !1,
                                    create: !0,
                                    render: {
                                        item: function (e, a) {
                                            return '<div><a class="url_link" target="_blank" href="' + a(e.text) + '">"' + a(e.text) + '"</a></div>';
                                        },
                                    },
                                    onDelete: function (e) {
                                        return confirm(1 < e.length ? "Are you sure you want to remove these " + e.length + " items?" : 'Are you sure you want to remove "' + e[0] + '"?');
                                    },
                                });
                                jQuery('.url_link').click(function(){
                                    url = jQuery(this).attr('href');
                                    window.open(url, '_blank');
                                });
                            }, 1000);
                        });
            
                    } else {
                        // car.notifyError();
                    }   
                    
            
            
            
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
            
        });
        
        
        $('#car-global-datatable').on('click', '.for-osqm-validation-correction', function () {

            if(jQuery(this).data('userrole') == "osqm_qmr" || jQuery(this).data('userrole') == 'lead_auditor'){
                jQuery('#saveCorrection').removeClass('hidden');
            } else {
                jQuery('#saveCorrection').addClass('hidden');
            }
        
            jQuery('#add-correction').addClass('hidden');
            jQuery('#add-consequences').addClass('hidden');
        
            var $action = '<div class="row mb-2">' +
                '<div class="form-group col-md-12">' +
                '<label for="validation_correction_dealing_with_consequences" class="form-label">Validation of Correction of Nonconformity and Dealing with the Consequences</label>' +
                '<select class="form-select validation_correction_dealing_with_consequences" name="validation_correction_dealing_with_consequences">' +
                    '<option value="For Closure">For Closure</option>' +
                    '<option value="For Revision">For Revision</option>' +
                '</select>' +
                '</div>' +
            '</div>' +
            '<div class="row mb-2">' +
                '<div class="form-group col-md-12">' +
                '<label for="validation_correction_dealing_with_consequences_remarks" class="form-label">Remarks </label>' +
                '<textarea class="form-control validation_correction_dealing_with_consequences_remarks" name="validation_correction_dealing_with_consequences_remarks" rows="4"></textarea>' +
                '</div>' +
            '</div>';
            
            jQuery('#car-correction-action').html($action);
        
            jQuery('#car-correction-action').removeClass();
            jQuery('#car-correction-action').addClass('mt-4');
            jQuery('#car-correction-action').addClass('row');
            jQuery('#car-correction-action').addClass('correction-action-validation');
            
            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            
            
            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
            
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            
            division = jQuery('.addCARFormIssuance .issued_by').val();
            
            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){
            
                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;
            
                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });
            
                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);
            
                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });
            
                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
            
            
            
            
            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#correction').empty();
            $('#consequencesdiv').empty();
            
            $.ajax({
                type: 'POST',
                url: '../car/getCorrectionAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != '[]'){
            
                        response = JSON.parse(response);
                        
                        var validation_correction_dealing_with_consequences = response[0].validation_correction_dealing_with_consequences;
                        var validation_correction_dealing_with_consequences_remarks = response[0].validation_correction_dealing_with_consequences_remarks;
        
                        
                        jQuery('.validation_correction_dealing_with_consequences').val(validation_correction_dealing_with_consequences);
                        jQuery('.validation_correction_dealing_with_consequences_remarks').val(validation_correction_dealing_with_consequences_remarks);
            
                        console.log(response);
            
                        var correctionEntries = JSON.parse(response[0].correction_entry);
                        var count = 0;
                        // Loop through correction entries and create HTML for each entry
                        correctionEntries.forEach(function (correction) {
        
                            var verificationValue = correction.correction_acceptable_verification !== undefined ? correction.correction_acceptable_verification : ''; // Added
                            var remarksReview = correction.correction_acceptable_remarks_verification !== undefined ? correction.correction_acceptable_remarks_verification : ''; 
            
                            var correctionHtml = `
                                <div class="col-lg-12 correction-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-12">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Correction</label>
                                                            <textarea class="form-control" name="correction[${count}]" rows="4">${correction.correction}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="correction_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${correction.correction_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="correction_completion_date[${count}]" value="${correction.correction_completion_date}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6 mt-2">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="correction_person_responsible_url[${count}]" value="${correction.correction_person_responsible_url}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">5.1 Was the nonconformity properly corrected?</label>
        
                                                    <div class="col-lg-3 text-inlign mb-2">
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" readonly name="correction_acceptable_verification[${count}]" value="1" class="form-check-input" ${verificationValue === '1' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_verification">YES</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" readonly name="correction_acceptable_verification[${count}]" value="0" class="form-check-input" ${verificationValue === '0' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_verification">NO</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label for="correction_acceptable_remarks_verification" class="form-label">Remarks</label>
                                                        <textarea class="form-control" readonly name="correction_acceptable_remarks_verification[${count}]" rows="4">${remarksReview}</textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
            
                            count++;
                            // Append the correction HTML to the container
                            $('#correction').append(correctionHtml);
                        });
            
                        var consequenceEntries = JSON.parse(response[0].consequence_entry);
                        var count = 0;
                        // Loop through correction entries and create HTML for each entry
                        consequenceEntries.forEach(function (consequence) {
            
                            
                            var verificationValue = consequence.consequence_acceptable_verification !== undefined ? consequence.consequence_acceptable_verification : ''; // Added
                            var remarksReview = consequence.consequence_acceptable_remarks_verification !== undefined ? consequence.consequence_acceptable_remarks_verification : ''; // Added
        
                            var consequenceHtml = `
                                <div class="col-lg-12 consequences-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-12">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Dealing with the consequences</label>
                                                            <textarea class="form-control" name="consequence[${count}]" rows="4">${consequence.consequence}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="consequence_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${consequence.consequence_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="consequence_completion_date[${count}]" value="${consequence.consequence_completion_date}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6 mt-2">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="consequence_person_responsible_url[${count}]" value="${consequence.consequence_person_responsible_url}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">5.2 Was the consequences properly handled or treated?</label>
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" readonly name="consequence_acceptable_verification[${count}]" value="1" class="form-check-input" ${verificationValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_verification">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" readonly name="consequence_acceptable_verification[${count}]" value="0" class="form-check-input" ${verificationValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_verification">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="consequence_acceptable_remarks_verification" class="form-label">Remarks</label>
                                                            <textarea class="form-control" readonly name="consequence_acceptable_remarks_verification[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            count++;
                            // Append the correction HTML to the container
                            $('#consequencesdiv').append(consequenceHtml);
        
                            setTimeout(function() {
                                jQuery(".selectize-close-btn").selectize({
                                    plugins: ["remove_button"],
                                    persist: !1,
                                    create: !0,
                                    render: {
                                        item: function (e, a) {
                                            return '<div><a class="url_link" target="_blank" href="' + a(e.text) + '">"' + a(e.text) + '"</a></div>';
                                        },
                                    },
                                    onDelete: function (e) {
                                        return confirm(1 < e.length ? "Are you sure you want to remove these " + e.length + " items?" : 'Are you sure you want to remove "' + e[0] + '"?');
                                    },
                                });
                                jQuery('.url_link').click(function(){
                                    url = jQuery(this).attr('href');
                                    window.open(url, '_blank');
                                });
                            }, 1000);
                        });
            
                    } else {
                        // car.notifyError();
                    }   
                    
            
            
            
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
            
        });
        

        $('#car-global-datatable').on('click', '.edit-corrective-action', function () {

            if(jQuery(this).data('userrole') == "osqm_dco" || jQuery(this).data('userrole') == 'osqm_do' || jQuery(this).data('userrole') == 'div_chief'){
                jQuery('#saveRoot').addClass('hidden');
            } else {
                jQuery('#saveRoot').removeClass('hidden');
            }
        
        
            if((jQuery(this).data('corrective_status') == "For CAR action" || jQuery(this).data('corrective_status') == "For Partial" || jQuery(this).data('corrective_status') == "For Revision") && jQuery(this).data('partial') == "no"){
                jQuery('#add-rootcause').removeClass('hidden');
                jQuery('#add-identified-root').removeClass('hidden');
                jQuery('#add-risk-number').removeClass('hidden');
                jQuery('#add-opportunity-number').removeClass('hidden');
            } else {
                jQuery('#add-rootcause').addClass('hidden');
                jQuery('#add-identified-root').addClass('hidden');
                jQuery('#add-risk-number').addClass('hidden');
                jQuery('#add-opportunity-number').addClass('hidden');
            }
            

            
            if(jQuery(this).data('corrective_status') != 'For Implementation'){
                
                if(jQuery(this).data('partial') == "yes"){
                    
                    var $action = '<div class="row mb-2">' +
                        '<div class="form-group col-md-12">' +
                        '<label for="action_root_cause_analysis" class="form-label">Action and Root Cause Analysis</label>' +
                        '<select class="form-select action_root_cause_analysis" name="action_root_cause_analysis">' +
                            '<option value="For Partial">For Partial</option>' +
                        '</select>' +
                        '</div>' +
                    '</div>';

                } else {

                    var $action = '<div class="row mb-2">' +
                        '<div class="form-group col-md-12">' +
                        '<label for="action_root_cause_analysis" class="form-label">Action and Root Cause Analysis</label>' +
                        '<select class="form-select action_root_cause_analysis" name="action_root_cause_analysis">' +
                            '<option value="For Partial">For Partial</option>' +
                            '<option value="For OSQM Review">For OSQM Review</option>' +
                        '</select>' +
                        '</div>' +
                    '</div>';
                }
               
            } else {
                
                var $action = '';
            }
            
         
            jQuery('#car-action').html($action);
            
            jQuery('#car-action').removeClass();
            jQuery('#car-action').addClass('mt-4');
            jQuery('#car-action').addClass('row');
            jQuery('#car-action').addClass('corrective-action');
         
            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            $partial = jQuery(this).data('partial');
            
         
            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
         
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
         
            division = jQuery('.addCARFormIssuance .issued_by').val();
         
            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){
         
                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;
         
                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });
         
                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);
         
                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });
         
                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
         
            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#risk-number').empty();
            $('#opportunity-number').empty();
            $('#rootcause').empty();
            $('#identified-root').empty();
        
            var corrective_status = jQuery(this).data('corrective_status');
         
            $.ajax({
                type: 'POST',
                url: '../car/getCorrectiveAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != 'null'){
                        
                        response = JSON.parse(response);
         
                        if(response[0]){
                            $('input[name="existing_nonconformity"][value="'+ response[0].existing_nonconformity +'"]').prop('checked', true);
                            $('input[name="update_doc_info"][value="'+ response[0].update_doc_info +'"]').prop('checked', true);
                            $('input[name="opportunity_identified_yn"][value="'+ response[0].opportunity_identified +'"]').prop('checked', true);

                            if(response[0].opportunity_identified == "1"){
                                jQuery('#opportunity-number').removeClass('hidden');
                                jQuery('#add-opportunity-number').removeClass('hidden');
                            } else {
                                jQuery('#opportunity-number').addClass('hidden');
                                jQuery('#add-opportunity-number').addClass('hidden');
                            }
         
                            $('[name="existing_nonconformity_remarks"]').val(response[0].existing_nonconformity_remarks);
                            $('[name="update_doc_info_remarks"]').val(response[0].update_doc_info_remarks);
         
                            var riskEntries = JSON.parse(response[0].risk_entry);
                            var count = 0;
                            riskEntries.forEach(function (risk) {
                                var riskHtml = `
                                    <div class="col-lg-12 risk-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Risk Number</label>
                                                                <textarea rows="4" class="form-control" name="risk_number[${count}]">${risk.risk_number}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Details / Updates</label>
                                                                <textarea rows="4" class="form-control" name="risk_number_details_update[${count}]">${risk.risk_number_details_update}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">File URL</label>
                                                                <input type="text" class="form-control selectize-close-btn" readonly name="risk_number_attachment_url[${count}]" value="${risk.risk_number_attachment_url}">
                                                            </div>
                                                        </div>
                                 
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the risk HTML to the container
                                count++;
                                $('#risk-number').append(riskHtml);
                            });
         
         
                            var opportunityEntries = JSON.parse(response[0].opportunity_entry);
                            var count = 0;
                            opportunityEntries.forEach(function (opportunity) {
                                var opportunityHtml = `
                                    <div class="col-lg-12 opportunity-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunity Number</label>
                                                                <textarea rows="4" class="form-control" name="opportunity_number[${count}]">${opportunity.opportunity_number}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunities Identified (if applicable)</label>
                                                                <textarea rows="4" class="form-control" name="opportunity_identified[${count}]">${opportunity.opportunity_identified}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="opportunity_number_attachment_url[${count}]" value="${opportunity.opportunity_number_attachment_url}">
                                                            </div>
                                                        </div>
                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the opportunity HTML to the container
                                count++;
                                $('#opportunity-number').append(opportunityHtml);
                            });
         
         
                            var rootCauseEntries = JSON.parse(response[0].root_cause_entry);
                            var count = 0;
                            rootCauseEntries.forEach(function (rootCause) {
                                var rootCauseHtml = `
                                    <div class="col-lg-12 rootcause-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-3">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Root Cause Analysis Used</label>
                                                                <input type="text" class="form-control" readonly name="rootcause[${count}]" value="${rootCause.rootcause}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="rootcause_file_url[${count}]" value="${rootCause.rootcause_file_url}">
                                                            </div>
                                                        </div>
                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the root cause HTML to the container
                                count++;
                                $('#rootcause').append(rootCauseHtml);
                            });
         
         
                            var identifiedRootEntries = JSON.parse(response[0].identified_root_entry);
                            var count = 0;
                            identifiedRootEntries.forEach(function (identifiedRoot) {
         
                                var issued_by = '';
                                var issued_to = '';
                                var section_name = '';
                                
                                if(identifiedRoot.tpn_issued_by){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDivisionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_by},
                                        success: function (response) {
                                            response = JSON.parse(response);
         
                                            if(response[0]){
                                                 issued_by = response[0].div_name;
                                            }
                                        }
                                    });
                                }
         
                                if(identifiedRoot.tpn_issued_to){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDepartmentByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_to},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 issued_to = response[0].dep_name;
                                            }
                                        }
                                    });
                                }
                                
                                if(identifiedRoot.tpn_section){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getSectionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_section},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 section_name = response[0].section_name;
                                            }
                                        }
                                    });
                                }
         
                                setTimeout(function() {
         
                                var identifiedRootHtml = `
                                    <div class="col-lg-12 identified-root-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-6 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Identified Root Cause</label>
                                                                <textarea rows="4" class="form-control" name="identified_root[${count}]">${identifiedRoot.identified_root}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Corrective Action</label>
                                                                <textarea rows="4" class="form-control" name="identified_root_corrective_action[${count}]">${identifiedRoot.identified_root_corrective_action}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">TPN Control</label>
                                                                <input type="text" readonly class="form-control" name="tpn_control[${count}]" value="${identifiedRoot.tpn_control}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-2">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Person Responsible</label>
                                                                <input type="text" readonly class="form-control" name="identified_root_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${identifiedRoot.identified_root_person_responsible}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Completion Date</label>
                                                                <input type="date" readonly class="form-control" name="identified_root_completion_date[${count}]" value="${identifiedRoot.identified_root_completion_date}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                        <div class="form-group">
                                                            <label for="issued_by" class="form-label">Issued By</label>
                                                            <input type="text" readonly class="form-control" name="" value="${issued_by}">
                                                            <input type="hidden" readonly class="form-control" name="tpn_issued_by[${count}]" value="${identifiedRoot.tpn_issued_by}">
                                                            <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                        </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="form-group">
                                                                <label for="issued_to" class="form-label">Issued To</label>
                                                                <input type="text" readonly class="form-control" name="" value="${issued_to}">
                                                                <input type="hidden" readonly class="form-control" name="tpn_issued_to[${count}]" value="${identifiedRoot.tpn_issued_to}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="form-group">
                                                                <label for="section" class="form-label">Section Unit</label>
                                                                <input type="text" readonly class="form-control" name="" value="${section_name}">
                                                                <input type="hidden" readonly class="form-control" name="section[${count}]" value="${identifiedRoot.section}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="identified_root_attachment_url[${count}]"  value="${identifiedRoot.identified_root_attachment_url}">
                                                            </div>
                                                        </div>
                                  
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the identified root HTML to the container
                                $('#identified-root').append(identifiedRootHtml);
        
                                setTimeout(function() {
                                    jQuery(".selectize-close-btn").selectize({
                                        plugins: ["remove_button"],
                                        persist: !1,
                                        create: !0,
                                        render: {
                                            item: function (e, a) {
                                                return '<div><a class="url_link" target="_blank" href="' + a(e.text) + '">"' + a(e.text) + '"</a></div>';
                                            },
                                        },
                                        onDelete: function (e) {
                                            return confirm(1 < e.length ? "Are you sure you want to remove these " + e.length + " items?" : 'Are you sure you want to remove "' + e[0] + '"?');
                                        },
                                    });
                                    jQuery('.url_link').click(function(){
                                        url = jQuery(this).attr('href');
                                        window.open(url, '_blank');
                                    });
                                }, 1000);
         
                                count++;
                                }, 3000);
        
                              
                            });
         
                        }
         
                    }   
         
                
                    
                if((corrective_status == "For CAR action" || corrective_status == "For Partial" || corrective_status == "For Revision" ) && $partial == 'no'){
        
                    var riskHtml = `
                    <div class="col-lg-12 risk-number-repeatable">
                        <div class="card">
                            <div class="card-body">
                                <div class="mb-3">
                                    <div class="row">
                                        <div class="col-xl-6 mb-2">
                                            <div class="mb-3 mb-xl-0">
                                                <label class="form-label">Risk Number</label>
                                                <textarea rows="4" class="form-control" name="risk_number[]"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div class="mb-3 mb-xl-0">
                                                <label class="form-label">Details / Updates</label>
                                                <textarea rows="4" class="form-control" name="risk_number_details_update[]"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div class="mb-3 mb-xl-0">
                                            <label class="form-label">File URL</label>
                                            <input type="text" class="form-control selectize-close-btn" name="risk_number_attachment_url[]">
                                            </div>
                                        </div>
        
                                        <div class="col-xl-1">
                                            <div class="mb-3 mb-xl-0">
                                                <label class="form-label">Remove</label>
                                                <button type="button" class="btn btn-danger remove-risk-number-action"><i class="fas fa-trash"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    // Append the risk HTML to the container
                    $('#risk-number').append(riskHtml);
            
                    var opportunityHtml = `
                    <div class="col-lg-12 opportunity-number-repeatable">
                        <div class="card">
                            <div class="card-body">
                                <div class="mb-3">
                                    <div class="row">
                                        <div class="col-xl-6 mb-2">
                                            <div class="mb-3 mb-xl-0">
                                                <label class="form-label">Opportunity Number</label>
                                                <textarea rows="4" class="form-control" name="opportunity_number[]"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div class="mb-3 mb-xl-0">
                                                <label class="form-label">Opportunities Identified (if applicable)</label>
                                                <textarea rows="4" class="form-control" name="opportunity_identified[]"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div class="mb-3 mb-xl-0">
                                            <label class="form-label">File URL</label>
                                            <input type="text" class="form-control selectize-close-btn" name="opportunity_number_attachment_url[]">
                                            </div>
                                        </div>
        
                                        <div class="col-xl-1">
                                            <div class="mb-3 mb-xl-0">
                                                <label class="form-label">Remove</label>
                                                <button type="button" class="btn btn-danger remove-opportunity-number-action"><i class="fas fa-trash"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    // Append the opportunity HTML to the container
                    $('#opportunity-number').append(opportunityHtml);
            
                    var rootCauseHtml = `
                                    <div class="col-lg-12 rootcause-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-4 mb-2">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Root Cause Analysis Used</label>
                                                                <input type="text" class="form-control" name="rootcause[]" value="">
                                                            </div>
                                                        </div>
                             
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" name="rootcause_file_url[]">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Remove</label>
                                                                <button type="button" class="btn btn-danger remove-rootcause-action"><i class="fas fa-trash"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                    `;
                    // Append the root cause HTML to the container
                    $('#rootcause').append(rootCauseHtml);
                    
            
                    setTimeout(function() {
            
                        $.ajax({
                            type: 'POST',
                            url: '../car/getDivision', // Replace 'MyController' with your controller name
                            data: {},
                            success: function (response) {
                                var html 
                                if(response != 'null'){
            
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var div_name = item.div_name;
                
                                        html += '<option value="'+id+'">'+div_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                    });
            
                                    var identifiedRootHtml = `
                                            <div class="col-lg-12 identified-root-repeatable">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="mb-3">
                                                            <div class="row">
                                                                <div class="col-xl-6 mb-1">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Identified Root Cause</label>
                                                                        <textarea rows="4" class="form-control" name="identified_root[]"></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6 mb-1">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Corrective Action</label>
                                                                        <textarea rows="4" class="form-control" name="identified_root_corrective_action[]"></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 mb-1">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">TPN Control</label>
                                                                        <select class="form-select tpn-control" name="tpn_control[]">
                                                                            <option value="total">Total</option>
                                                                            <option value="partial">Partial</option>
                                                                            <option value="no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
            
                                                                <div class="col-xl-4 mb-2">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Person Responsible</label>
                                                                        <input type="text" class="form-control" name="identified_root_person_responsible[]" placeholder="Enter Name of personnel" value="">
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Completion Date</label>
                                                                        <input type="date" class="form-control" name="identified_root_completion_date[]" value="">
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 mb-1">
                                                                <div class="form-group" style="display: none;>
                                                                    <label for="issued_by" class="form-label">Issued By</label>
                                                                    <select class="form-select issued_by" name="tpn_issued_by[]">
                                                                        <option value=""></option>
                                                                        ${html}
                                                                    </select>
                                                                    <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                                </div>
                                                                </div>
                                                                <div class="col-xl-4 mb-1">
                                                                    <div class="form-group" style="display: none;>
                                                                        <label for="issued_to" class="form-label">Issued To</label>
                                                                        <select class="form-select issued_to" name="tpn_issued_to[]">
                                                                            <option value=""></option>
                                                                        </select>
                                                                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 mb-1">
                                                                    <div class="form-group" style="display: none;>
                                                                        <label for="section" class="form-label">Section Unit</label>
                                                                        <select class="form-select section"  name="tpn_section[]">
                                                                            <option value=""></option>
                                                                        </select>
                                                                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6">
                                                                    <div class="mb-3 mb-xl-0">
                                                                    <label class="form-label">File URL</label>
                                                                    <input type="text" class="form-control selectize-close-btn" name="identified_root_attachment_url[]">
                                                                    </div>
                                                                </div>
                
                                                                <div class="col-xl-1">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Remove</label>
                                                                        <button type="button" class="btn btn-danger remove-identified-root-action"><i class="fas fa-trash"></i></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        `;
                                        // Append the identified root HTML to the container
                                    $('#identified-root').append(identifiedRootHtml);
            
                                    issued_by = jQuery(this).parent().parent().parent().find('.issued_by');
                                    issued_to = jQuery(this).parent().parent().parent().find('.issued_to');
                                    section = jQuery(this).parent().parent().parent().find('.section');
                    
                                    issued_by.val();
                                    issued_to.val();
                                    section.val();
                    
                                    issued_by.parent().hide();
                                    issued_to.parent().hide();
                                    section.parent().hide();
            
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });
        
                        setTimeout(function() {
                            jQuery(".selectize-close-btn").selectize({
                                plugins: ["remove_button"],
                                persist: !1,
                                create: !0,
                                render: {
                                    item: function (e, a) {
                                        return '<div><a class="url_link" target="_blank" href="' + a(e.text) + '">"' + a(e.text) + '"</a></div>';
                                    },
                                },
                                onDelete: function (e) {
                                    return confirm(1 < e.length ? "Are you sure you want to remove these " + e.length + " items?" : 'Are you sure you want to remove "' + e[0] + '"?');
                                },
                            });
                            jQuery('.url_link').click(function(){
                                url = jQuery(this).attr('href');
                                window.open(url, '_blank');
                            });
                        }, 1000);
                        
                    }, 3000);
        
                }
        
         
         
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
        
        
        });

        $('#car-global-datatable').on('click', '.for-osqm-review-corrective-action', function () {

            if(jQuery(this).data('userrole') == "department_head" || jQuery(this).data('userrole') == "section_head" || jQuery(this).data('userrole') == 'div_chief'){
                jQuery('#saveRoot').addClass('hidden');
            } else {
                jQuery('#saveRoot').removeClass('hidden');
            }
            
            jQuery('#add-rootcause').addClass('hidden');
            jQuery('#add-identified-root').addClass('hidden');
            jQuery('#add-risk-number').addClass('hidden');
            jQuery('#add-opportunity-number').addClass('hidden');

            var $action = '<div class="row mb-2">' +
                    '<div class="form-group col-md-12">' +
                    '<label for="review_action_root_cause_analysis" class="form-label">Review of Action and Root Cause Analysis</label>' +
                    '<select class="form-select review_action_root_cause_analysis" name="review_action_root_cause_analysis">' +
                        '<option value="For Approval">For Approval</option>' +
                        '<option value="For Revision">For Revision</option>' +
                    '</select>' +
                    '</div>' +
                '</div>' +
                '<div class="row mb-2">' +
                    '<div class="form-group col-md-12">' +
                    '<label for="review_action_root_cause_analysis_remarks" class="form-label">Remarks </label>' +
                    '<textarea class="form-control review_action_root_cause_analysis_remarks" name="review_action_root_cause_analysis_remarks" rows="4"></textarea>' +
                    '</div>' +
                '</div>';
         
            jQuery('#car-action').html($action);
         
            jQuery('#car-action').removeClass();
            jQuery('#car-action').addClass('mt-4');
            jQuery('#car-action').addClass('row');
            jQuery('#car-action').addClass('corrective-action-review');
         
            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            
         
            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
         
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
         
            division = jQuery('.addCARFormIssuance .issued_by').val();
         
            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){
         
                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;
         
                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });
         
                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);
         
                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });
         
                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
         
            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#risk-number').empty();
            $('#opportunity-number').empty();
            $('#rootcause').empty();
            $('#identified-root').empty();
         
            $.ajax({
                type: 'POST',
                url: '../car/getCorrectiveAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != 'null'){
                        
                        response = JSON.parse(response);
                        
                        var review_action_root_cause_analysis = response[0].review_action_root_cause_analysis;
                        var review_action_root_cause_analysis_remarks = response[0].review_action_root_cause_analysis_remarks;
         
                        jQuery('.review_action_root_cause_analysis').val(review_action_root_cause_analysis);
                        jQuery('.review_action_root_cause_analysis_remarks').val(review_action_root_cause_analysis_remarks);
         
                        if(response[0]){
                            $('input[name="existing_nonconformity"][value="'+ response[0].existing_nonconformity +'"]').prop('checked', true);
                            $('input[name="update_doc_info"][value="'+ response[0].update_doc_info +'"]').prop('checked', true);
                            $('input[name="opportunity_identified_yn"][value="'+ response[0].opportunity_identified +'"]').prop('checked', true);

                            if(response[0].opportunity_identified == "1"){
                                jQuery('#opportunity-number').removeClass('hidden');
                            } else {
                                jQuery('#opportunity-number').addClass('hidden');
                            }
         
                            $('[name="existing_nonconformity_remarks"]').val(response[0].existing_nonconformity_remarks);
                            $('[name="update_doc_info_remarks"]').val(response[0].update_doc_info_remarks);
         
                            var riskEntries = JSON.parse(response[0].risk_entry);
                            var count = 0;
                            riskEntries.forEach(function (risk) {
         
                              var approval = risk.risk_number_acceptable_approval !== undefined ? risk.risk_number_acceptable_approval : '';
                              var verification = risk.risk_number_acceptable_verification !== undefined ? risk.risk_number_acceptable_verification : '';
                              var validation = risk.risk_number_acceptable_validation !== undefined ? risk.risk_number_acceptable_validation : ''
         
                              var approval_remarks = risk.risk_number_acceptable_remarks_approval !== undefined ? risk.risk_number_acceptable_remarks_approval : '';
                              var verification_remarks = risk.risk_number_acceptable_remarks_verification !== undefined ? risk.risk_number_acceptable_remarks_verification : '';
                              var validation_remarks = risk.risk_number_acceptable_remarks_validation !== undefined ? risk.risk_number_acceptable_remarks_validation : '';
         
                              var reviewValue = risk.risk_number_acceptable_review !== undefined ? risk.risk_number_acceptable_review : ''; // Added
                              var remarksReview = risk.risk_number_acceptable_remarks_review !== undefined ? risk.risk_number_acceptable_remarks_review : ''; // Added
         
                                var riskHtml = `
                                    <div class="col-lg-12 risk-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Risk Number</label>
                                                                <textarea rows="4" class="form-control" name="risk_number[${count}]">${risk.risk_number}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Details / Updates</label>
                                                                <textarea rows="4" class="form-control" name="risk_number_details_update[${count}]">${risk.risk_number_details_update}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">File URL</label>
                                                                <input type="text" class="form-control selectize-close-btn" readonly name="risk_number_attachment_url[${count}]" value="${risk.risk_number_attachment_url}">
                                                            </div>
                                                        </div>
                        
                                                        
                                                    </div>
                                                    <div class="row">
                                                         <label for="acceptable" class="form-label">Acceptable</label>
         
                                                         <input type="hidden" value="${approval}" name="risk_number_acceptable_approval[${count}]">
                                                         <input type="hidden" value="${verification}" name="risk_number_acceptable_verification[${count}]">
                                                         <input type="hidden" value="${validation}" name="risk_number_acceptable_validation[${count}]">
         
                                                         <input type="hidden" value="${approval_remarks}" name="risk_number_acceptable_remarks_approval[${count}]">
                                                         <input type="hidden" value="${verification_remarks}" name="risk_number_acceptable_remarks_verification[${count}]">
                                                         <input type="hidden" value="${validation_remarks}" name="risk_number_acceptable_remarks_validation[${count}]">
                                                         
                                                         <div class="col-lg-3 text-inlign mb-2">
                                                               <div class="form-check form-check-inline">
                                                                  <input type="radio" name="risk_number_acceptable_review[${count}]" value="1" class="form-check-input" ${reviewValue === '1' ? 'checked' : ''}>
                                                                  <label class="form-check-label" for="risk_number_acceptable_review">YES</label>
                                                               </div>
                                                               <div class="form-check form-check-inline">
                                                                  <input type="radio" name="risk_number_acceptable_review[${count}]" value="0" class="form-check-input" ${reviewValue === '0' ? 'checked' : ''}>
                                                                  <label class="form-check-label" for="risk_number_acceptable_review">NO</label>
                                                               </div>
                                                         </div>
                                                         <div class="form-group col-lg-12">
                                                               <label for="risk_number_acceptable_remarks_review" class="form-label">Remarks</label>
                                                               <textarea class="form-control" name="risk_number_acceptable_remarks_review[${count}]" rows="4">${remarksReview}</textarea>
                                                         </div>
                                                      </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the risk HTML to the container
                                count++;
                                $('#risk-number').append(riskHtml);
                            });
         
         
                            var opportunityEntries = JSON.parse(response[0].opportunity_entry);
                            var count = 0;
                            opportunityEntries.forEach(function (opportunity) {
         
                              var approval = opportunity.opportunity_number_acceptable_approval !== undefined ? opportunity.risk_number_acceptable_approval : '';
                              var verification = opportunity.opportunity_number_acceptable_verification !== undefined ? opportunity.opportunity_number_acceptable_verification : '';
                              var validation = opportunity.opportunity_number_acceptable_validation !== undefined ? opportunity.opportunity_number_acceptable_validation : '';
         
                              var approval_remarks = opportunity.opportunity_number_acceptable_remarks_approval !== undefined ? opportunity.risk_number_acceptable_remarks_approval : '';
                              var verification_remarks = opportunity.opportunity_number_acceptable_remarks_verification !== undefined ? opportunity.opportunity_number_acceptable_remarks_verification : '';
                              var validation_remarks = opportunity.opportunity_number_acceptable_remarks_validation !== undefined ? opportunity.opportunity_number_acceptable_remarks_validation : '';
         
         
                              var reviewValue = opportunity.opportunity_number_acceptable_review !== undefined ? opportunity.opportunity_number_acceptable_review : ''; // Added
                              var remarksReview = opportunity.opportunity_number_acceptable_remarks_review !== undefined ? opportunity.opportunity_number_acceptable_remarks_review : ''; // Added
         
                                var opportunityHtml = `
                                    <div class="col-lg-12 opportunity-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunity Number</label>
                                                                <textarea rows="4" class="form-control" name="opportunity_number[${count}]">${opportunity.opportunity_number}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunities Identified (if applicable)</label>
                                                                <textarea rows="4" class="form-control" name="opportunity_identified[${count}]">${opportunity.opportunity_identified}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="opportunity_number_attachment_url[${count}]" value="${opportunity.opportunity_number_attachment_url}">
                                                            </div>
                                                        </div>
                                 
                                                    </div>
                                                    <div class="row">
                                                      <label for="acceptable" class="form-label">Acceptable</label>
         
                                                         <input type="hidden" value="${approval}" name="opportunity_number_acceptable_approval[${count}]">
                                                         <input type="hidden" value="${verification}" name="opportunity_number_acceptable_verification[${count}]">
                                                         <input type="hidden" value="${validation}" name="opportunity_number_acceptable_validation[${count}]">
         
                                                         <input type="hidden" value="${approval_remarks}" name="opportunity_number_acceptable_remarks_approval[${count}]">
                                                         <input type="hidden" value="${verification_remarks}" name="opportunity_number_acceptable_remarks_verification[${count}]">
                                                         <input type="hidden" value="${validation_remarks}" name="opportunity_number_acceptable_remarks_validation[${count}]">
         
                                                      <div class="col-lg-3 text-inlign mb-2">
                                                         <div class="form-check form-check-inline">
                                                               <input type="radio" name="opportunity_number_acceptable_review[${count}]" value="1" class="form-check-input" ${reviewValue === '1' ? 'checked' : ''}>
                                                               <label class="form-check-label" for="opportunity_number_acceptable_review">YES</label>
                                                         </div>
                                                         <div class="form-check form-check-inline">
                                                               <input type="radio" name="opportunity_number_acceptable_review[${count}]" value="0" class="form-check-input" ${reviewValue === '0' ? 'checked' : ''}>
                                                               <label class="form-check-label" for="opportunity_number_acceptable_review">NO</label>
                                                         </div>
                                                      </div>
                                                      <div class="form-group col-lg-12">
                                                         <label for="opportunity_number_acceptable_remarks_review" class="form-label">Remarks</label>
                                                         <textarea class="form-control" name="opportunity_number_acceptable_remarks_review[${count}]" rows="4">${remarksReview}</textarea>
                                                      </div>
                                                   </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the opportunity HTML to the container
                                count++;
                                $('#opportunity-number').append(opportunityHtml);
                            });
         
         
                            var rootCauseEntries = JSON.parse(response[0].root_cause_entry);
                            var count = 0;
                            rootCauseEntries.forEach(function (rootCause) {
         
                              var approval = rootCause.rootcause_acceptable_approval !== undefined ? rootCause.rootcause_acceptable_approval : '';
                              var verification = rootCause.rootcause_acceptable_verification !== undefined ? rootCause.rootcause_acceptable_verification : '';
                              var validation = rootCause.rootcause_acceptable_validation !== undefined ? rootCause.rootcause_acceptable_validation : '';
         
                              var approval_remarks = rootCause.rootcause_acceptable_remarks_approval !== undefined ? rootCause.rootcause_acceptable_remarks_approval : '';
                              var verification_remarks = rootCause.rootcause_acceptable_remarks_verification !== undefined ? rootCause.rootcause_acceptable_remarks_verification : '';
                              var validation_remarks = rootCause.rootcause_acceptable_remarks_validation !== undefined ? rootCause.rootcause_acceptable_remarks_validation : '';
         
         
                              var reviewValue = rootCause.rootcause_acceptable_review !== undefined ? rootCause.rootcause_acceptable_review : ''; // Added
                              var remarksReview = rootCause.rootcause_acceptable_remarks_review !== undefined ? rootCause.rootcause_acceptable_remarks_review : ''; // Added
         
                                var rootCauseHtml = `
                                    <div class="col-lg-12 rootcause-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-3">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Root Cause Analysis Used</label>
                                                                <input type="text" class="form-control" readonly name="rootcause[${count}]" value="${rootCause.rootcause}">
                                                            </div>
                                                        </div>
                                     
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="rootcause_file_url[${count}]" value="${rootCause.rootcause_file_url}">
                                                            </div>
                                                        </div>
                 
                                                    </div>
                                                    <div class="row">
                                                         <label for="acceptable" class="form-label">Acceptable</label>
         
                                                            <input type="hidden" value="${approval}" name="rootcause_acceptable_approval[${count}]">
                                                            <input type="hidden" value="${verification}" name="rootcause_acceptable_verification[${count}]">
                                                            <input type="hidden" value="${validation}" name="rootcause_acceptable_validation[${count}]">
         
                                                            <input type="hidden" value="${approval_remarks}" name="rootcause_acceptable_remarks_approval[${count}]">
                                                            <input type="hidden" value="${verification_remarks}" name="rootcause_acceptable_remarks_verification[${count}]">
                                                            <input type="hidden" value="${validation_remarks}" name="rootcause_acceptable_remarks_validation[${count}]">
         
                                                         <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                  <input type="radio" name="rootcause_acceptable_review[${count}]" value="1" class="form-check-input" ${reviewValue === '1' ? 'checked' : ''}>
                                                                  <label class="form-check-label" for="rootcause_acceptable_review">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                  <input type="radio" name="rootcause_acceptable_review[${count}]" value="0" class="form-check-input" ${reviewValue === '0' ? 'checked' : ''}>
                                                                  <label class="form-check-label" for="rootcause_acceptable_review">NO</label>
                                                            </div>
                                                         </div>
                                                         <div class="form-group col-lg-12">
                                                            <label for="rootcause_acceptable_remarks_review" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="rootcause_acceptable_remarks_review[${count}]" rows="4">${remarksReview}</textarea>
                                                         </div>
                                                      </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the root cause HTML to the container
                                count++;
                                $('#rootcause').append(rootCauseHtml);
                            });
         
         
                            var identifiedRootEntries = JSON.parse(response[0].identified_root_entry);
                            var count = 0;
                            identifiedRootEntries.forEach(function (identifiedRoot) {
         
                              var issued_by = '';
                              var issued_to = '';
                              var section_name = '';
         
                              var approval = identifiedRoot.identified_root_acceptable_approval !== undefined ? identifiedRoot.identified_root_acceptable_approval : '';
                              var verification = identifiedRoot.identified_root_acceptable_verification !== undefined ? identifiedRoot.identified_root_acceptable_verification : '';
                              var validation = identifiedRoot.identified_root_acceptable_validation !== undefined ? identifiedRoot.identified_root_acceptable_validation : '';
                              
                              var approval_remarks = identifiedRoot.identified_root_acceptable_remarks_approval !== undefined ? identifiedRoot.identified_root_acceptable_remarks_approval : '';
                              var verification_remarks = identifiedRoot.identified_root_acceptable_remarks_verification !== undefined ? identifiedRoot.identified_root_acceptable_remarks_verification : '';
                              var validation_remarks = identifiedRoot.identified_root_acceptable_remarks_validation !== undefined ? identifiedRoot.identified_root_acceptable_remarks_validation : '';
         
                              var reviewValue = identifiedRoot.identified_root_acceptable_review !== undefined ? identifiedRoot.identified_root_acceptable_review : ''; // Added
                              var remarksReview = identifiedRoot.identified_root_acceptable_remarks_review !== undefined ? identifiedRoot.identified_root_acceptable_remarks_review : ''; // Added
         
                                
                                if(identifiedRoot.tpn_issued_by){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDivisionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_by},
                                        success: function (response) {
                                            response = JSON.parse(response);
         
                                            if(response[0]){
                                                 issued_by = response[0].div_name;
                                            }
                                        }
                                    });
                                }
         
                                if(identifiedRoot.tpn_issued_to){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDepartmentByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_to},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 issued_to = response[0].dep_name;
                                            }
                                        }
                                    });
                                }
                                
                                if(identifiedRoot.tpn_section){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getSectionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_section},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 section_name = response[0].section_name;
                                            }
                                        }
                                    });
                                }
         
                                setTimeout(function() {
         
                                var identifiedRootHtml = `
                                    <div class="col-lg-12 identified-root-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-6 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Identified Root Cause</label>
                                                                <textarea rows="4" class="form-control" name="identified_root[${count}]">${identifiedRoot.identified_root}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Corrective Action</label>
                                                                <textarea rows="4" class="form-control" name="identified_root_corrective_action[${count}]">${identifiedRoot.identified_root_corrective_action}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">TPN Control</label>
                                                                <input type="text" readonly class="form-control" name="tpn_control[${count}]" value="${identifiedRoot.tpn_control}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-2">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Person Responsible</label>
                                                                <input type="text" readonly class="form-control" name="identified_root_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${identifiedRoot.identified_root_person_responsible}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Completion Date</label>
                                                                <input type="date" readonly class="form-control" name="identified_root_completion_date[${count}]" value="${identifiedRoot.identified_root_completion_date}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                        <div class="form-group">
                                                            <label for="issued_by" class="form-label">Issued By</label>
                                                            <input type="text" readonly class="form-control" name="" value="${issued_by}">
                                                            <input type="hidden" readonly class="form-control" name="tpn_issued_by[${count}]" value="${identifiedRoot.tpn_issued_by}">
                                                            <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                        </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="form-group">
                                                                <label for="issued_to" class="form-label">Issued To</label>
                                                                <input type="text" readonly class="form-control" name="" value="${issued_to}">
                                                                <input type="hidden" readonly class="form-control" name="tpn_issued_to[${count}]" value="${identifiedRoot.tpn_issued_to}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="form-group">
                                                                <label for="section" class="form-label">Section Unit</label>
                                                                <input type="text" readonly class="form-control" name="" value="${section_name}">
                                                                <input type="hidden" readonly class="form-control" name="section[${count}]" value="${identifiedRoot.section}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="identified_root_attachment_url[${count}]"  value="${identifiedRoot.identified_root_attachment_url}">
                                                            </div>
                                                        </div>
                        
                                                    </div>
                                                    <div class="row">
                                                      <label for="acceptable" class="form-label">Acceptable</label>
         
                                                         <input type="hidden" value="${approval}" name="identified_root_acceptable_approval[${count}]">
                                                         <input type="hidden" value="${verification}" name="identified_root_acceptable_verification[${count}]">
                                                         <input type="hidden" value="${validation}" name="identified_root_acceptable_validation[${count}]">
         
                                                         <input type="hidden" value="${approval_remarks}" name="identified_root_acceptable_remarks_approval[${count}]">
                                                         <input type="hidden" value="${verification_remarks}" name="identified_root_acceptable_remarks_verification[${count}]">
                                                         <input type="hidden" value="${validation_remarks}" name="identified_root_acceptable_remarks_validation[${count}]">
         
                                                      <div class="col-lg-3 text-inlign mb-2">
                                                         <div class="form-check form-check-inline">
                                                               <input type="radio" name="identified_root_acceptable_review[${count}]" value="1" class="form-check-input" ${reviewValue === '1' ? 'checked' : ''}>
                                                               <label class="form-check-label" for="identified_root_acceptable_review">YES</label>
                                                         </div>
                                                         <div class="form-check form-check-inline">
                                                               <input type="radio" name="identified_root_acceptable_review[${count}]" value="0" class="form-check-input" ${reviewValue === '0' ? 'checked' : ''}>
                                                               <label class="form-check-label" for="identified_root_acceptable_review">NO</label>
                                                         </div>
                                                      </div>
                                                      <div class="form-group col-lg-12">
                                                         <label for="identified_root_acceptable_remarks_review" class="form-label">Remarks</label>
                                                         <textarea class="form-control" name="identified_root_acceptable_remarks_review[${count}]" rows="4">${remarksReview}</textarea>
                                                      </div>
                                                   </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the identified root HTML to the container
                                $('#identified-root').append(identifiedRootHtml);


                                setTimeout(function() {
                                    jQuery(".selectize-close-btn").selectize({
                                        plugins: ["remove_button"],
                                        persist: !1,
                                        create: !0,
                                        render: {
                                            item: function (e, a) {
                                                return '<div><a class="url_link" target="_blank" href="' + a(e.text) + '">"' + a(e.text) + '"</a></div>';
                                            },
                                        },
                                        onDelete: function (e) {
                                            return confirm(1 < e.length ? "Are you sure you want to remove these " + e.length + " items?" : 'Are you sure you want to remove "' + e[0] + '"?');
                                        },
                                    });
                                    jQuery('.url_link').click(function(){
                                        url = jQuery(this).attr('href');
                                        window.open(url, '_blank');
                                    });
                                }, 1000);
         
                                count++;
                                }, 3000);
                            });
         
                        }
         
                    }   
         
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
         
            
         
        });

        $('#car-global-datatable').on('click', '.for-osqm-approval-corrective-action', function () {

            if(jQuery(this).data('userrole') == "department_head" || jQuery(this).data('userrole') == "section_head" || jQuery(this).data('userrole') == 'osqm_dco' || jQuery(this).data('userrole') == 'osqm_do'){
                jQuery('#saveRoot').addClass('hidden');
            } else {
                jQuery('#saveRoot').removeClass('hidden');
            }

            jQuery('#add-rootcause').addClass('hidden');
            jQuery('#add-identified-root').addClass('hidden');
            jQuery('#add-risk-number').addClass('hidden');
            jQuery('#add-opportunity-number').addClass('hidden');

            var $action = '<div class="row mb-2">' +
            '<div class="form-group col-md-12">' +
            '<label for="approval_action_root_cause_analysis" class="form-label">Review of Action and Root Cause Analysis</label>' +
            '<select class="form-select approval_action_root_cause_analysis" name="approval_action_root_cause_analysis">' +
                '<option value="For Implementation">For Implementation</option>' +
                '<option value="For Revision">For Revision</option>' +
            '</select>' +
            '</div>' +
        '</div>' +
        '<div class="row mb-2">' +
            '<div class="form-group col-md-12">' +
            '<label for="approval_action_root_cause_analysis_remarks" class="form-label">Remarks </label>' +
            '<textarea class="form-control approval_action_root_cause_analysis_remarks" name="approval_action_root_cause_analysis_remarks" rows="4"></textarea>' +
            '</div>' +
        '</div>';
        
        jQuery('#car-action').html($action);
        
        jQuery('#car-action').removeClass();
        jQuery('#car-action').addClass('mt-4');
        jQuery('#car-action').addClass('row');
        jQuery('#car-action').addClass('corrective-action-approval');
        
        $car_id = jQuery(this).data('car_id');
        $requestor = jQuery(this).data('requestor');
        $car_no = jQuery(this).data('car_no');
        $source = jQuery(this).data('source');
        $issued_by = jQuery(this).data('issued_by');
        $issued_to = jQuery(this).data('issued_to');
        $section = jQuery(this).data('section');
        $identification_date = jQuery(this).data('identification_date');
        $issuance_of_nc = jQuery(this).data('issuance_of_nc');
        $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
        $status = jQuery(this).data('status');
        
        
        $findings = jQuery(this).data('findings');
        $consequences = jQuery(this).data('consequences');
        $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
        
        jQuery('.addCARFormIssuance .car_id').val($car_id);
        jQuery('.addCARFormIssuance .requestor').val($requestor);
        jQuery('.addCARFormIssuance .car_no').val($car_no);
        jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
        jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
        jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
        jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
        jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
        jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
        jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
        jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
        jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
        
        division = jQuery('.addCARFormIssuance .issued_by').val();
        
        $.ajax({
            type: 'POST',
            url: '../car/getDepartment', // Replace 'MyController' with your controller name
            data: {division: division},
            success: function (response) {
                if(response != 'null'){
        
                    $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                    $.each(JSON.parse(response), function (index, item) {
                        // Access each item's properties
                        var id = item.id;
                        var dep_name = item.dep_name;
        
                        var html = '<option value="'+id+'">'+dep_name+'</option>';
                        // Do something with the data, for example, display it on the page
                        $('.addCARFormIssuance .issued_to').append(html);
                    });
        
                    jQuery('.addCARFormIssuance .issued_to').val($issued_to);
        
                    department = $issued_to;
                    $.ajax({
                        type: 'POST',
                        url: '../car/getSection', // Replace 'MyController' with your controller name
                        data: {department: department},
                        success: function (response) {
                            if(response != 'null'){
        
                                $('.addCARFormIssuance .section').html('<option value=""></option>');
                                $.each(JSON.parse(response), function (index, item) {
                                    // Access each item's properties
                                    var id = item.id;
                                    var section_name = item.section_name;
            
                                    var html = '<option value="'+id+'">'+section_name+'</option>';
                                    // Do something with the data, for example, display it on the page
                                    $('.addCARFormIssuance .section').append(html);
                                });
        
                                jQuery('.addCARFormIssuance .section').val($section);
                            }   
                        },
                        error: function () {
                            // Handle errors
                            diList.notifyError();
                        }
                    });
        
                }   
            },
            error: function () {
                // Handle errors
                diList.notifyError();
            }
        });
        
        var car_id = jQuery(this).data('car_id');
        jQuery('.car_id').val(car_id);
        $('#risk-number').empty();
        $('#opportunity-number').empty();
        $('#rootcause').empty();
        $('#identified-root').empty();
        
        $.ajax({
            type: 'POST',
            url: '../car/getCorrectiveAction', // Replace 'MyController' with your controller name
            data: {car_id: car_id},
            success: function (response) {
                if(response != 'null'){
                    
                    response = JSON.parse(response);
        
                    if(response[0]){
                        $('input[name="existing_nonconformity"][value="'+ response[0].existing_nonconformity +'"]').prop('checked', true);
                        $('input[name="update_doc_info"][value="'+ response[0].update_doc_info +'"]').prop('checked', true);
                        $('input[name="opportunity_identified_yn"][value="'+ response[0].opportunity_identified +'"]').prop('checked', true);
                        
                        if(response[0].opportunity_identified == "1"){
                            jQuery('#opportunity-number').removeClass('hidden');
                        } else {
                            jQuery('#opportunity-number').addClass('hidden');
                        }

                        $('[name="existing_nonconformity_remarks"]').val(response[0].existing_nonconformity_remarks);
                        $('[name="update_doc_info_remarks"]').val(response[0].update_doc_info_remarks);
        
                        var riskEntries = JSON.parse(response[0].risk_entry);
                        var count = 0;
                        riskEntries.forEach(function (risk) {
        
                            var review = risk.risk_number_acceptable_review !== undefined ? risk.risk_number_acceptable_review : '';
                            var verification = risk.risk_number_acceptable_verification !== undefined ? risk.risk_number_acceptable_verification : '';
                            var validation = risk.risk_number_acceptable_validation !== undefined ? risk.risk_number_acceptable_validation : ''
        
                            var review_remarks = risk.risk_number_acceptable_remarks_review !== undefined ? risk.risk_number_acceptable_remarks_review : '';
                            var verification_remarks = risk.risk_number_acceptable_remarks_verification !== undefined ? risk.risk_number_acceptable_remarks_verification : '';
                            var validation_remarks = risk.risk_number_acceptable_remarks_validation !== undefined ? risk.risk_number_acceptable_remarks_validation : '';
        
                            var approvalValue = risk.risk_number_acceptable_approval !== undefined ? risk.risk_number_acceptable_approval : ''; // Added
                            var remarksReview = risk.risk_number_acceptable_remarks_approval !== undefined ? risk.risk_number_acceptable_remarks_approval : ''; // Added
        
                            var riskHtml = `
                                <div class="col-lg-12 risk-number-repeatable">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-6">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Risk Number</label>
                                                            <textarea rows="4" class="form-control" name="risk_number[${count}]">${risk.risk_number}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Details / Updates</label>
                                                            <textarea rows="4" class="form-control" name="risk_number_details_update[${count}]">${risk.risk_number_details_update}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="risk_number_attachment_url[${count}]" value="${risk.risk_number_attachment_url}">
                                                        </div>
                                                    </div>
                          
                                                </div>
                                                <div class="row">
                                                        <label for="acceptable" class="form-label">Acceptable</label>
        
                                                        <input type="hidden" value="${review}" name="risk_number_acceptable_review[${count}]">
                                                        <input type="hidden" value="${verification}" name="risk_number_acceptable_verification[${count}]">
                                                        <input type="hidden" value="${validation}" name="risk_number_acceptable_validation[${count}]">
        
                                                        <input type="hidden" value="${review_remarks}" name="risk_number_acceptable_remarks_review[${count}]">
                                                        <input type="hidden" value="${verification_remarks}" name="risk_number_acceptable_remarks_verification[${count}]">
                                                        <input type="hidden" value="${validation_remarks}" name="risk_number_acceptable_remarks_validation[${count}]">
                                                        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="risk_number_acceptable_approval[${count}]" value="1" class="form-check-input" ${approvalValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="risk_number_acceptable_approval">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="risk_number_acceptable_approval[${count}]" value="0" class="form-check-input" ${approvalValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="risk_number_acceptable_approval">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="risk_number_acceptable_remarks_approval" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="risk_number_acceptable_remarks_approval[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            // Append the risk HTML to the container
                            count++;
                            $('#risk-number').append(riskHtml);
                        });
        
        
                        var opportunityEntries = JSON.parse(response[0].opportunity_entry);
                        var count = 0;
                        opportunityEntries.forEach(function (opportunity) {
        
                            var review = opportunity.opportunity_number_acceptable_review !== undefined ? opportunity.risk_number_acceptable_review : '';
                            var verification = opportunity.opportunity_number_acceptable_verification !== undefined ? opportunity.opportunity_number_acceptable_verification : '';
                            var validation = opportunity.opportunity_number_acceptable_validation !== undefined ? opportunity.opportunity_number_acceptable_validation : '';
        
                            var review_remarks = opportunity.opportunity_number_acceptable_remarks_review !== undefined ? opportunity.risk_number_acceptable_remarks_review : '';
                            var verification_remarks = opportunity.opportunity_number_acceptable_remarks_verification !== undefined ? opportunity.opportunity_number_acceptable_remarks_verification : '';
                            var validation_remarks = opportunity.opportunity_number_acceptable_remarks_validation !== undefined ? opportunity.opportunity_number_acceptable_remarks_validation : '';
        
        
                            var approvalValue = opportunity.opportunity_number_acceptable_approval !== undefined ? opportunity.opportunity_number_acceptable_approval : ''; // Added
                            var remarksReview = opportunity.opportunity_number_acceptable_remarks_approval !== undefined ? opportunity.opportunity_number_acceptable_remarks_approval : ''; // Added
        
                            var opportunityHtml = `
                                <div class="col-lg-12 opportunity-number-repeatable">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-6">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Opportunity Number</label>
                                                            <textarea rows="4" class="form-control" name="opportunity_number[${count}]">${opportunity.opportunity_number}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Opportunities Identified (if applicable)</label>
                                                            <textarea rows="4" class="form-control" name="opportunity_identified[${count}]">${opportunity.opportunity_identified}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6">
                                                        <div class="mb-3 mb-xl-0">
                                                        <label class="form-label">File URL</label>
                                                        <input type="text" class="form-control selectize-close-btn" readonly name="opportunity_number_attachment_url[${count}]" value="${opportunity.opportunity_number_attachment_url}">
                                                        </div>
                                                    </div>
                              
                                    
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">Acceptable</label>
        
                                                        <input type="hidden" value="${review}" name="opportunity_number_acceptable_review[${count}]">
                                                        <input type="hidden" value="${verification}" name="opportunity_number_acceptable_verification[${count}]">
                                                        <input type="hidden" value="${validation}" name="opportunity_number_acceptable_validation[${count}]">
        
                                                        <input type="hidden" value="${review_remarks}" name="opportunity_number_acceptable_remarks_review[${count}]">
                                                        <input type="hidden" value="${verification_remarks}" name="opportunity_number_acceptable_remarks_verification[${count}]">
                                                        <input type="hidden" value="${validation_remarks}" name="opportunity_number_acceptable_remarks_validation[${count}]">
        
                                                    <div class="col-lg-3 text-inlign mb-2">
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="opportunity_number_acceptable_approval[${count}]" value="1" class="form-check-input" ${approvalValue === '1' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="opportunity_number_acceptable_approval">YES</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="opportunity_number_acceptable_approval[${count}]" value="0" class="form-check-input" ${approvalValue === '0' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="opportunity_number_acceptable_approval">NO</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label for="opportunity_number_acceptable_remarks_approval" class="form-label">Remarks</label>
                                                        <textarea class="form-control" name="opportunity_number_acceptable_remarks_approval[${count}]" rows="4">${remarksReview}</textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            // Append the opportunity HTML to the container
                            count++;
                            $('#opportunity-number').append(opportunityHtml);
                        });
        
        
                        var rootCauseEntries = JSON.parse(response[0].root_cause_entry);
                        var count = 0;
                        rootCauseEntries.forEach(function (rootCause) {
        
                            var review = rootCause.rootcause_acceptable_review !== undefined ? rootCause.rootcause_acceptable_review : '';
                            var verification = rootCause.rootcause_acceptable_verification !== undefined ? rootCause.rootcause_acceptable_verification : '';
                            var validation = rootCause.rootcause_acceptable_validation !== undefined ? rootCause.rootcause_acceptable_validation : '';
        
                            var review_remarks = rootCause.rootcause_acceptable_remarks_review !== undefined ? rootCause.rootcause_acceptable_remarks_review : '';
                            var verification_remarks = rootCause.rootcause_acceptable_remarks_verification !== undefined ? rootCause.rootcause_acceptable_remarks_verification : '';
                            var validation_remarks = rootCause.rootcause_acceptable_remarks_validation !== undefined ? rootCause.rootcause_acceptable_remarks_validation : '';
        
        
                            var approvalValue = rootCause.rootcause_acceptable_approval !== undefined ? rootCause.rootcause_acceptable_approval : ''; // Added
                            var remarksReview = rootCause.rootcause_acceptable_remarks_approval !== undefined ? rootCause.rootcause_acceptable_remarks_approval : ''; // Added
        
                            var rootCauseHtml = `
                                <div class="col-lg-12 rootcause-repeatable">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-3">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Root Cause Analysis Used</label>
                                                            <input type="text" class="form-control" readonly name="rootcause[${count}]" value="${rootCause.rootcause}">
                                                        </div>
                                                    </div>
                    
                                                    <div class="col-xl-6">
                                                        <div class="mb-3 mb-xl-0">
                                                        <label class="form-label">File URL</label>
                                                        <input type="text" class="form-control selectize-close-btn" readonly name="rootcause_file_url[${count}]" value="${rootCause.rootcause_file_url}">
                                                        </div>
                                                    </div>
                     
                                                </div>
                                                <div class="row">
                                                <label for="acceptable" class="form-label">Acceptable</label>
        
                                                    <input type="hidden" value="${review}" name="rootcause_acceptable_review[${count}]">
                                                    <input type="hidden" value="${verification}" name="rootcause_acceptable_verification[${count}]">
                                                    <input type="hidden" value="${validation}" name="rootcause_acceptable_validation[${count}]">
        
                                                    <input type="hidden" value="${review_remarks}" name="rootcause_acceptable_remarks_review[${count}]">
                                                    <input type="hidden" value="${verification_remarks}" name="rootcause_acceptable_remarks_verification[${count}]">
                                                    <input type="hidden" value="${validation_remarks}" name="rootcause_acceptable_remarks_validation[${count}]">
        
                                                <div class="col-lg-3 text-inlign mb-2">
                                                    <div class="form-check form-check-inline">
                                                        <input type="radio" name="rootcause_acceptable_approval[${count}]" value="1" class="form-check-input" ${approvalValue === '1' ? 'checked' : ''}>
                                                        <label class="form-check-label" for="rootcause_acceptable_approval">YES</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input type="radio" name="rootcause_acceptable_approval[${count}]" value="0" class="form-check-input" ${approvalValue === '0' ? 'checked' : ''}>
                                                        <label class="form-check-label" for="rootcause_acceptable_approval">NO</label>
                                                    </div>
                                                </div>
                                                <div class="form-group col-lg-12">
                                                    <label for="rootcause_acceptable_remarks_approval" class="form-label">Remarks</label>
                                                    <textarea class="form-control" name="rootcause_acceptable_remarks_approval[${count}]" rows="4">${remarksReview}</textarea>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            // Append the root cause HTML to the container
                            count++;
                            $('#rootcause').append(rootCauseHtml);
                        });
        
        
                        var identifiedRootEntries = JSON.parse(response[0].identified_root_entry);
                        var count = 0;
                        identifiedRootEntries.forEach(function (identifiedRoot) {
        
                            var issued_by = '';
                            var issued_to = '';
                            var section_name = '';
        
                            var review = identifiedRoot.identified_root_acceptable_review !== undefined ? identifiedRoot.identified_root_acceptable_review : '';
                            var verification = identifiedRoot.identified_root_acceptable_verification !== undefined ? identifiedRoot.identified_root_acceptable_verification : '';
                            var validation = identifiedRoot.identified_root_acceptable_validation !== undefined ? identifiedRoot.identified_root_acceptable_validation : '';
                            
                            var review_remarks = identifiedRoot.identified_root_acceptable_remarks_review !== undefined ? identifiedRoot.identified_root_acceptable_remarks_review : '';
                            var verification_remarks = identifiedRoot.identified_root_acceptable_remarks_verification !== undefined ? identifiedRoot.identified_root_acceptable_remarks_verification : '';
                            var validation_remarks = identifiedRoot.identified_root_acceptable_remarks_validation !== undefined ? identifiedRoot.identified_root_acceptable_remarks_validation : '';
        
                            var approvalValue = identifiedRoot.identified_root_acceptable_approval !== undefined ? identifiedRoot.identified_root_acceptable_approval : ''; // Added
                            var remarksReview = identifiedRoot.identified_root_acceptable_remarks_approval !== undefined ? identifiedRoot.identified_root_acceptable_remarks_approval : ''; // Added
                            
                            if(identifiedRoot.tpn_issued_by){
                                $.ajax({
                                    type: 'POST',
                                    url: '../car/getDivisionByID', // Replace 'MyController' with your controller name
                                    data: {id: identifiedRoot.tpn_issued_by},
                                    success: function (response) {
                                        response = JSON.parse(response);
        
                                        if(response[0]){
                                             issued_by = response[0].div_name;
                                        }
                                    }
                                });
                            }
        
                            if(identifiedRoot.tpn_issued_to){
                                $.ajax({
                                    type: 'POST',
                                    url: '../car/getDepartmentByID', // Replace 'MyController' with your controller name
                                    data: {id: identifiedRoot.tpn_issued_to},
                                    success: function (response) {
                                        response = JSON.parse(response);
                                        if(response[0]){
                                             issued_to = response[0].dep_name;
                                        }
                                    }
                                });
                            }
                            
                            if(identifiedRoot.tpn_section){
                                $.ajax({
                                    type: 'POST',
                                    url: '../car/getSectionByID', // Replace 'MyController' with your controller name
                                    data: {id: identifiedRoot.tpn_section},
                                    success: function (response) {
                                        response = JSON.parse(response);
                                        if(response[0]){
                                             section_name = response[0].section_name;
                                        }
                                    }
                                });
                            }
        
                            setTimeout(function() {
        
                            var identifiedRootHtml = `
                                <div class="col-lg-12 identified-root-repeatable">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-6 mb-1">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Identified Root Cause</label>
                                                            <textarea rows="4" class="form-control" name="identified_root[${count}]">${identifiedRoot.identified_root}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6 mb-1">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Corrective Action</label>
                                                            <textarea rows="4" class="form-control" name="identified_root_corrective_action[${count}]">${identifiedRoot.identified_root_corrective_action}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 mb-1">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">TPN Control</label>
                                                            <input type="text" readonly class="form-control" name="tpn_control[${count}]" value="${identifiedRoot.tpn_control}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 mb-2">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Person Responsible</label>
                                                            <input type="text" readonly class="form-control" name="identified_root_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${identifiedRoot.identified_root_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Completion Date</label>
                                                            <input type="date" readonly class="form-control" name="identified_root_completion_date[${count}]" value="${identifiedRoot.identified_root_completion_date}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 mb-1">
                                                    <div class="form-group">
                                                            <label for="issued_by" class="form-label">Issued By</label>
                                                            <input type="text" readonly class="form-control" name="" value="${issued_by}">
                                                            <input type="hidden" readonly class="form-control" name="tpn_issued_by[${count}]" value="${identifiedRoot.tpn_issued_by}">
                                                            <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                        </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="form-group">
                                                                <label for="issued_to" class="form-label">Issued To</label>
                                                                <input type="text" readonly class="form-control" name="" value="${issued_to}">
                                                                <input type="hidden" readonly class="form-control" name="tpn_issued_to[${count}]" value="${identifiedRoot.tpn_issued_to}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="form-group">
                                                                <label for="section" class="form-label">Section Unit</label>
                                                                <input type="text" readonly class="form-control" name="" value="${section_name}">
                                                                <input type="hidden" readonly class="form-control" name="section[${count}]" value="${identifiedRoot.section}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                    <div class="col-xl-6">
                                                        <div class="mb-3 mb-xl-0">
                                                        <label class="form-label">File URL</label>
                                                        <input type="text" class="form-control selectize-close-btn" readonly name="identified_root_attachment_url[${count}]"  value="${identifiedRoot.identified_root_attachment_url}">
                                                        </div>
                                                    </div>
                           
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">Acceptable</label>
        
                                                        <input type="hidden" value="${review}" name="identified_root_acceptable_review[${count}]">
                                                        <input type="hidden" value="${verification}" name="identified_root_acceptable_verification[${count}]">
                                                        <input type="hidden" value="${validation}" name="identified_root_acceptable_validation[${count}]">
        
                                                        <input type="hidden" value="${review_remarks}" name="identified_root_acceptable_remarks_review[${count}]">
                                                        <input type="hidden" value="${verification_remarks}" name="identified_root_acceptable_remarks_verification[${count}]">
                                                        <input type="hidden" value="${validation_remarks}" name="identified_root_acceptable_remarks_validation[${count}]">
        
                                                    <div class="col-lg-3 text-inlign mb-2">
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="identified_root_acceptable_approval[${count}]" value="1" class="form-check-input" ${approvalValue === '1' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="identified_root_acceptable_approval">YES</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="identified_root_acceptable_approval[${count}]" value="0" class="form-check-input" ${approvalValue === '0' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="identified_root_acceptable_approval">NO</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label for="identified_root_acceptable_remarks_approval" class="form-label">Remarks</label>
                                                        <textarea class="form-control" name="identified_root_acceptable_remarks_approval[${count}]" rows="4">${remarksReview}</textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            // Append the identified root HTML to the container
                            $('#identified-root').append(identifiedRootHtml);
        
                            setTimeout(function() {
                                jQuery(".selectize-close-btn").selectize({
                                    plugins: ["remove_button"],
                                    persist: !1,
                                    create: !0,
                                    render: {
                                        item: function (e, a) {
                                            return '<div><a class="url_link" target="_blank" href="' + a(e.text) + '">"' + a(e.text) + '"</a></div>';
                                        },
                                    },
                                    onDelete: function (e) {
                                        return confirm(1 < e.length ? "Are you sure you want to remove these " + e.length + " items?" : 'Are you sure you want to remove "' + e[0] + '"?');
                                    },
                                });
                                jQuery('.url_link').click(function(){
                                    url = jQuery(this).attr('href');
                                    window.open(url, '_blank');
                                });
                            }, 1000);

                            count++;
                            }, 3000);
                        });
        
                    }
        
                }   
              
            },
            error: function () {
                // Handle errors
                diList.notifyError();
            }
        });
        });

        $('#car-global-datatable').on('click', '.for-osqm-verification-corrective-action', function () {

            if(source == '1' || source == '8'){
                if(jQuery(this).data('userrole') == "chair"){
                    jQuery('#saveRoot').removeClass('hidden');
                } else {
                    jQuery('#saveRoot').addClass('hidden');
                }
            } 

            if(source == '2'){
                if(jQuery(this).data('userrole') == "auditor"){
                    jQuery('#saveRoot').removeClass('hidden');
                } else {
                    jQuery('#saveRoot').addClass('hidden');
                }
            }

            if(source == '3' || source == '4' || source == '5' || source == '6' || source == '7'){
                if(jQuery(this).data('userrole') == "dqt_member"){
                    jQuery('#saveRoot').removeClass('hidden');
                } else {
                    jQuery('#saveRoot').addClass('hidden');
                }
            }

            jQuery('#add-rootcause').addClass('hidden');
            jQuery('#add-identified-root').addClass('hidden');
            jQuery('#add-risk-number').addClass('hidden');
            jQuery('#add-opportunity-number').addClass('hidden');

            var $action = '<div class="row mb-2">' +
                '<div class="form-group col-md-12">' +
                '<label for="verification_action_root_cause_analysis" class="form-label">Review of Action and Root Cause Analysis</label>' +
                '<select class="form-select verification_action_root_cause_analysis" name="verification_action_root_cause_analysis">' +
                    '<option value="For Validation">For Validation</option>' +
                    '<option value="For Revision">For Revision</option>' +
                '</select>' +
                '</div>' +
            '</div>' +
            '<div class="row mb-2">' +
                '<div class="form-group col-md-12">' +
                '<label for="verification_action_root_cause_analysis_remarks" class="form-label">Remarks </label>' +
                '<textarea class="form-control verification_action_root_cause_analysis_remarks" name="verification_action_root_cause_analysis_remarks" rows="4"></textarea>' +
                '</div>' +
            '</div>';
        
            jQuery('#car-action').html($action);
        
            jQuery('#car-action').removeClass();
            jQuery('#car-action').addClass('mt-4');
            jQuery('#car-action').addClass('row');
            jQuery('#car-action').addClass('corrective-action-verification');
         
            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            
         
            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
         
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
         
            division = jQuery('.addCARFormIssuance .issued_by').val();
         
            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){
         
                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;
         
                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });
         
                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);
         
                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });
         
                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
         
            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#risk-number').empty();
            $('#opportunity-number').empty();
            $('#rootcause').empty();
            $('#identified-root').empty();
         
            $.ajax({
                type: 'POST',
                url: '../car/getCorrectiveAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != 'null'){
                        
                        response = JSON.parse(response);
         
                        if(response[0]){
                            $('input[name="existing_nonconformity"][value="'+ response[0].existing_nonconformity +'"]').prop('checked', true);
                            $('input[name="update_doc_info"][value="'+ response[0].update_doc_info +'"]').prop('checked', true);
                            $('input[name="opportunity_identified_yn"][value="'+ response[0].opportunity_identified +'"]').prop('checked', true);

                            if(response[0].opportunity_identified == "1"){
                                jQuery('#opportunity-number').removeClass('hidden');
                            } else {
                                jQuery('#opportunity-number').addClass('hidden');
                            }
         
                            $('[name="existing_nonconformity_remarks"]').val(response[0].existing_nonconformity_remarks);
                            $('[name="update_doc_info_remarks"]').val(response[0].update_doc_info_remarks);
         
                            var riskEntries = JSON.parse(response[0].risk_entry);
                            var count = 0;
                            riskEntries.forEach(function (risk) {
                                var riskHtml = `
                                    <div class="col-lg-12 risk-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Risk Number</label>
                                                                <textarea rows="4" class="form-control" name="risk_number[${count}]">${risk.risk_number}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Details / Updates</label>
                                                                <textarea rows="4" class="form-control" name="risk_number_details_update[${count}]">${risk.risk_number_details_update}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">File URL</label>
                                                                <input type="text" class="form-control selectize-close-btn" readonly name="risk_number_attachment_url[${count}]" value="${risk.risk_number_attachment_url}">
                                                            </div>
                                                        </div>

                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the risk HTML to the container
                                count++;
                                $('#risk-number').append(riskHtml);
                            });
         
         
                            var opportunityEntries = JSON.parse(response[0].opportunity_entry);
                            var count = 0;
                            opportunityEntries.forEach(function (opportunity) {
                                var opportunityHtml = `
                                    <div class="col-lg-12 opportunity-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunity Number</label>
                                                                <textarea rows="4" class="form-control" name="opportunity_number[${count}]">${opportunity.opportunity_number}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunities Identified (if applicable)</label>
                                                                <textarea rows="4" class="form-control" name="opportunity_identified[${count}]">${opportunity.opportunity_identified}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="opportunity_number_attachment_url[${count}]" value="${opportunity.opportunity_number_attachment_url}">
                                                            </div>
                                                        </div>
                        
                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the opportunity HTML to the container
                                count++;
                                $('#opportunity-number').append(opportunityHtml);
                            });
         
         
                            var rootCauseEntries = JSON.parse(response[0].root_cause_entry);
                            var count = 0;
                            rootCauseEntries.forEach(function (rootCause) {
                                var rootCauseHtml = `
                                    <div class="col-lg-12 rootcause-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-3">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Root Cause Analysis Used</label>
                                                                <input type="text" class="form-control" readonly name="rootcause[${count}]" value="${rootCause.rootcause}">
                                                            </div>
                                                        </div>
                                  
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="rootcause_file_url[${count}]" value="${rootCause.rootcause_file_url}">
                                                            </div>
                                                        </div>
                              
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the root cause HTML to the container
                                count++;
                                $('#rootcause').append(rootCauseHtml);
                            });
         
         
                            var identifiedRootEntries = JSON.parse(response[0].identified_root_entry);
                            var count = 0;
                            identifiedRootEntries.forEach(function (identifiedRoot) {
         
                                var issued_by = '';
                                var issued_to = '';
                                var section_name = '';
        
                                var verificationValue = identifiedRoot.identified_root_acceptable_verification !== undefined ? identifiedRoot.identified_root_acceptable_verification : ''; // Added
                                var remarksReview = identifiedRoot.identified_root_acceptable_remarks_verification !== undefined ? identifiedRoot.identified_root_acceptable_remarks_verification : ''; // Added
                                
                                var verificationValueSecond = identifiedRoot.identified_root_acceptable_verification_second !== undefined ? identifiedRoot.identified_root_acceptable_verification_second : ''; // Added
                                var remarksReviewSecond = identifiedRoot.identified_root_acceptable_remarks_verification_second !== undefined ? identifiedRoot.identified_root_acceptable_remarks_verification_second : ''; // Added
                                
                                if(identifiedRoot.tpn_issued_by){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDivisionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_by},
                                        success: function (response) {
                                            response = JSON.parse(response);
         
                                            if(response[0]){
                                                 issued_by = response[0].div_name;
                                            }
                                        }
                                    });
                                }
         
                                if(identifiedRoot.tpn_issued_to){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDepartmentByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_to},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 issued_to = response[0].dep_name;
                                            }
                                        }
                                    });
                                }
                                
                                if(identifiedRoot.tpn_section){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getSectionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_section},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 section_name = response[0].section_name;
                                            }
                                        }
                                    });
                                }
         
                                setTimeout(function() {
         
                                var identifiedRootHtml = `
                                    <div class="col-lg-12 identified-root-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-6 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Identified Root Cause</label>
                                                                <textarea rows="4" class="form-control" name="identified_root[${count}]">${identifiedRoot.identified_root}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Corrective Action</label>
                                                                <textarea rows="4" class="form-control" name="identified_root_corrective_action[${count}]">${identifiedRoot.identified_root_corrective_action}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">TPN Control</label>
                                                                <input type="text" readonly class="form-control" name="tpn_control[${count}]" value="${identifiedRoot.tpn_control}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-2">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Person Responsible</label>
                                                                <input type="text" readonly class="form-control" name="identified_root_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${identifiedRoot.identified_root_person_responsible}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Completion Date</label>
                                                                <input type="date" readonly class="form-control" name="identified_root_completion_date[${count}]" value="${identifiedRoot.identified_root_completion_date}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                        <div class="form-group">
                                                            <label for="issued_by" class="form-label">Issued By</label>
                                                            <input type="text" readonly class="form-control" name="" value="${issued_by}">
                                                            <input type="hidden" readonly class="form-control" name="tpn_issued_by[${count}]" value="${identifiedRoot.tpn_issued_by}">
                                                            <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                        </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="form-group">
                                                                <label for="issued_to" class="form-label">Issued To</label>
                                                                <input type="text" readonly class="form-control" name="" value="${issued_to}">
                                                                <input type="hidden" readonly class="form-control" name="tpn_issued_to[${count}]" value="${identifiedRoot.tpn_issued_to}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="form-group">
                                                                <label for="section" class="form-label">Section Unit</label>
                                                                <input type="text" readonly class="form-control" name="" value="${section_name}">
                                                                <input type="hidden" readonly class="form-control" name="section[${count}]" value="${identifiedRoot.section}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="identified_root_attachment_url[${count}]"  value="${identifiedRoot.identified_root_attachment_url}">
                                                            </div>
                                                        </div>
                        
                                                    </div>
                                                    <div class="row">
                                                        <label for="acceptable" class="form-label">5.3 Follow-up on Corrective Action after completion of all actions: <br> Where the corrective actions implemented</label>
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="identified_root_acceptable_verification[${count}]" value="1" class="form-check-input" ${verificationValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="identified_root_acceptable_verification">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="identified_root_acceptable_verification[${count}]" value="0" class="form-check-input" ${verificationValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="identified_root_acceptable_verification">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="identified_root_acceptable_remarks_verification" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="identified_root_acceptable_remarks_verification[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
        
                                                    <div class="row">
                                                        <label for="acceptable" class="form-label">5.4 Effectivenes of Corrective Action for a period after implementation of all corrective actions <br> Did it prevent the Nonconformity (NC) from recurring after three months of monitoring? </label>
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="identified_root_acceptable_verification_second[${count}]" value="1" class="form-check-input" ${verificationValueSecond === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="identified_root_acceptable_verification_second">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="identified_root_acceptable_verification_second[${count}]" value="0" class="form-check-input" ${verificationValueSecond === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="identified_root_acceptable_verification_second">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="identified_root_acceptable_remarks_verification_second" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="identified_root_acceptable_remarks_verification_second[${count}]" rows="4">${remarksReviewSecond}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the identified root HTML to the container
                                $('#identified-root').append(identifiedRootHtml);

                                setTimeout(function() {
                                    jQuery(".selectize-close-btn").selectize({
                                        plugins: ["remove_button"],
                                        persist: !1,
                                        create: !0,
                                        render: {
                                            item: function (e, a) {
                                                return '<div><a class="url_link" target="_blank" href="' + a(e.text) + '">"' + a(e.text) + '"</a></div>';
                                            },
                                        },
                                        onDelete: function (e) {
                                            return confirm(1 < e.length ? "Are you sure you want to remove these " + e.length + " items?" : 'Are you sure you want to remove "' + e[0] + '"?');
                                        },
                                    });
                                    jQuery('.url_link').click(function(){
                                        url = jQuery(this).attr('href');
                                        window.open(url, '_blank');
                                    });
                                }, 1000);
         
                                count++;
                                }, 3000);

                            });
         
                        }
         
                    }   
         
                    
         
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
        });

        $('#car-global-datatable').on('click', '.for-osqm-validation-corrective-action', function () {

            if(jQuery(this).data('userrole') == "osqm_qmr" || jQuery(this).data('userrole') == 'lead_auditor'){
                jQuery('#saveRoot').removeClass('hidden');
            } else {
                jQuery('#saveRoot').addClass('hidden');
            }

            if(source == '1'){
                if(jQuery(this).data('userrole') == "chair" || jQuery(this).data('usersection') == 'internal_quality_audit'){
                    jQuery('#saveRoot').removeClass('hidden');
                } else {
                    jQuery('#saveRoot').addClass('hidden');
                }
            } 

            if(source == '2'){
                if(jQuery(this).data('userrole') == "auditor" || jQuery(this).data('usersection') == 'internal_quality_audit'){
                    jQuery('#saveRoot').removeClass('hidden');
                } else {
                    jQuery('#saveRoot').addClass('hidden');
                }
            }

            if(source == '3' || source == '4' || source == '5' || source == '6' || source == '7'){
                if(jQuery(this).data('userrole') == "dqt_member"){
                    jQuery('#saveRoot').removeClass('hidden');
                } else {
                    jQuery('#saveRoot').addClass('hidden');
                }
            }

            if(source == '8'){
                if(jQuery(this).data('userrole') == "chair" || jQuery(this).data('usersection') == 'customer_satisfaction_committee'){
                    jQuery('#saveRoot').removeClass('hidden');
                } else {
                    jQuery('#saveRoot').addClass('hidden');
                }
            }

            jQuery('#add-rootcause').addClass('hidden');
            jQuery('#add-identified-root').addClass('hidden');
            jQuery('#add-risk-number').addClass('hidden');
            jQuery('#add-opportunity-number').addClass('hidden');

            var $action = '<div class="row mb-2">' +
                '<div class="form-group col-md-12">' +
                '<label for="validation_action_root_cause_analysis" class="form-label">Review of Action and Root Cause Analysis</label>' +
                '<select class="form-select validation_action_root_cause_analysis" name="validation_action_root_cause_analysis">' +
                    '<option value="For Closure">For Closure</option>' +
                    '<option value="For Revision">For Revision</option>' +
                '</select>' +
                '</div>' +
            '</div>' +
            '<div class="row mb-2">' +
                '<div class="form-group col-md-12">' +
                '<label for="validation_action_root_cause_analysis_remarks" class="form-label">Remarks </label>' +
                '<textarea class="form-control validation_action_root_cause_analysis_remarks" name="validation_action_root_cause_analysis_remarks" rows="4"></textarea>' +
                '</div>' +
            '</div>';
        
            jQuery('#car-action').html($action);
        
            jQuery('#car-action').removeClass();
            jQuery('#car-action').addClass('mt-4');
            jQuery('#car-action').addClass('row');
            jQuery('#car-action').addClass('corrective-action-validation');
         
            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            
         
            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
         
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
         
            division = jQuery('.addCARFormIssuance .issued_by').val();
         
            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){
         
                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;
         
                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });
         
                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);
         
                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });
         
                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
         
            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#risk-number').empty();
            $('#opportunity-number').empty();
            $('#rootcause').empty();
            $('#identified-root').empty();
         
            $.ajax({
                type: 'POST',
                url: '../car/getCorrectiveAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != 'null'){
                        
                        response = JSON.parse(response);
         
                        if(response[0]){
                            $('input[name="existing_nonconformity"][value="'+ response[0].existing_nonconformity +'"]').prop('checked', true);
                            $('input[name="update_doc_info"][value="'+ response[0].update_doc_info +'"]').prop('checked', true);
                            $('input[name="opportunity_identified_yn"][value="'+ response[0].opportunity_identified +'"]').prop('checked', true);

                            if(response[0].opportunity_identified == "1"){
                                jQuery('#opportunity-number').removeClass('hidden');
                            } else {
                                jQuery('#opportunity-number').addClass('hidden');
                            }
         
                            $('[name="existing_nonconformity_remarks"]').val(response[0].existing_nonconformity_remarks);
                            $('[name="update_doc_info_remarks"]').val(response[0].update_doc_info_remarks);
         
                            var riskEntries = JSON.parse(response[0].risk_entry);
                            var count = 0;
                            riskEntries.forEach(function (risk) {
                                var riskHtml = `
                                    <div class="col-lg-12 risk-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Risk Number</label>
                                                                <textarea rows="4" class="form-control" name="risk_number[${count}]">${risk.risk_number}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Details / Updates</label>
                                                                <textarea rows="4" class="form-control" name="risk_number_details_update[${count}]">${risk.risk_number_details_update}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">File URL</label>
                                                                <input type="text" class="form-control selectize-close-btn" readonly name="risk_number_attachment_url[${count}]" value="${risk.risk_number_attachment_url}">
                                                            </div>
                                                        </div>
                   
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the risk HTML to the container
                                count++;
                                $('#risk-number').append(riskHtml);
                            });
         
         
                            var opportunityEntries = JSON.parse(response[0].opportunity_entry);
                            var count = 0;
                            opportunityEntries.forEach(function (opportunity) {
                                var opportunityHtml = `
                                    <div class="col-lg-12 opportunity-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunity Number</label>
                                                                <textarea rows="4" class="form-control" name="opportunity_number[${count}]">${opportunity.opportunity_number}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunities Identified (if applicable)</label>
                                                                <textarea rows="4" class="form-control" name="opportunity_identified[${count}]">${opportunity.opportunity_identified}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="opportunity_number_attachment_url[${count}]" value="${opportunity.opportunity_number_attachment_url}">
                                                            </div>
                                                        </div>
                             
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the opportunity HTML to the container
                                count++;
                                $('#opportunity-number').append(opportunityHtml);
                            });
         
         
                            var rootCauseEntries = JSON.parse(response[0].root_cause_entry);
                            var count = 0;
                            rootCauseEntries.forEach(function (rootCause) {
                                var rootCauseHtml = `
                                    <div class="col-lg-12 rootcause-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-3">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Root Cause Analysis Used</label>
                                                                <input type="text" class="form-control" readonly name="rootcause[${count}]" value="${rootCause.rootcause}">
                                                            </div>
                                                        </div>
                       
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="rootcause_file_url[${count}]" value="${rootCause.rootcause_file_url}">
                                                            </div>
                                                        </div>
                                 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the root cause HTML to the container
                                count++;
                                $('#rootcause').append(rootCauseHtml);
                            });
         
         
                            var identifiedRootEntries = JSON.parse(response[0].identified_root_entry);
                            var count = 0;
                            identifiedRootEntries.forEach(function (identifiedRoot) {
         
                                var issued_by = '';
                                var issued_to = '';
                                var section_name = '';
        
                                var verificationValue = identifiedRoot.identified_root_acceptable_verification !== undefined ? identifiedRoot.identified_root_acceptable_verification : ''; // Added
                                var remarksReview = identifiedRoot.identified_root_acceptable_remarks_verification !== undefined ? identifiedRoot.identified_root_acceptable_remarks_verification : ''; // Added
                                
                                var verificationValueSecond = identifiedRoot.identified_root_acceptable_verification_second !== undefined ? identifiedRoot.identified_root_acceptable_verification_second : ''; // Added
                                var remarksReviewSecond = identifiedRoot.identified_root_acceptable_remarks_verification_second !== undefined ? identifiedRoot.identified_root_acceptable_remarks_verification_second : ''; // Added
                                
                                if(identifiedRoot.tpn_issued_by){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDivisionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_by},
                                        success: function (response) {
                                            response = JSON.parse(response);
         
                                            if(response[0]){
                                                 issued_by = response[0].div_name;
                                            }
                                        }
                                    });
                                }
         
                                if(identifiedRoot.tpn_issued_to){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDepartmentByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_to},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 issued_to = response[0].dep_name;
                                            }
                                        }
                                    });
                                }
                                
                                if(identifiedRoot.tpn_section){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getSectionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_section},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 section_name = response[0].section_name;
                                            }
                                        }
                                    });
                                }
         
                                setTimeout(function() {
         
                                var identifiedRootHtml = `
                                    <div class="col-lg-12 identified-root-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-6 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Identified Root Cause</label>
                                                                <textarea rows="4" class="form-control" name="identified_root[${count}]">${identifiedRoot.identified_root}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Corrective Action</label>
                                                                <textarea rows="4" class="form-control" name="identified_root_corrective_action[${count}]">${identifiedRoot.identified_root_corrective_action}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">TPN Control</label>
                                                                <input type="text" readonly class="form-control" name="tpn_control[${count}]" value="${identifiedRoot.tpn_control}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-2">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Person Responsible</label>
                                                                <input type="text" readonly class="form-control" name="identified_root_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${identifiedRoot.identified_root_person_responsible}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Completion Date</label>
                                                                <input type="date" readonly class="form-control" name="identified_root_completion_date[${count}]" value="${identifiedRoot.identified_root_completion_date}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                        <div class="form-group">
                                                            <label for="issued_by" class="form-label">Issued By</label>
                                                            <input type="text" readonly class="form-control" name="" value="${issued_by}">
                                                            <input type="hidden" readonly class="form-control" name="tpn_issued_by[${count}]" value="${identifiedRoot.tpn_issued_by}">
                                                            <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                        </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="form-group">
                                                                <label for="issued_to" class="form-label">Issued To</label>
                                                                <input type="text" readonly class="form-control" name="" value="${issued_to}">
                                                                <input type="hidden" readonly class="form-control" name="tpn_issued_to[${count}]" value="${identifiedRoot.tpn_issued_to}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="form-group">
                                                                <label for="section" class="form-label">Section Unit</label>
                                                                <input type="text" readonly class="form-control" name="" value="${section_name}">
                                                                <input type="hidden" readonly class="form-control" name="section[${count}]" value="${identifiedRoot.section}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="identified_root_attachment_url[${count}]"  value="${identifiedRoot.identified_root_attachment_url}">
                                                            </div>
                                                        </div>
                             
                                                    </div>
                                                    <div class="row">
                                                        <label for="acceptable" class="form-label">5.3 Follow-up on Corrective Action after completion of all actions: <br> Where the corrective actions implemented</label>
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" readonly name="identified_root_acceptable_verification[${count}]" value="1" class="form-check-input" ${verificationValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="identified_root_acceptable_verification">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" readonly name="identified_root_acceptable_verification[${count}]" value="0" class="form-check-input" ${verificationValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="identified_root_acceptable_verification">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="identified_root_acceptable_remarks_verification" class="form-label">Remarks</label>
                                                            <textarea class="form-control" readonly name="identified_root_acceptable_remarks_verification[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
        
                                                    <div class="row">
                                                        <label for="acceptable" class="form-label">5.4 Effectivenes of Corrective Action for a period after implementation of all corrective actions <br> Did it prevent the Nonconformity (NC) from recurring after three months of monitoring? </label>
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" readonly name="identified_root_acceptable_verification_second[${count}]" value="1" class="form-check-input" ${verificationValueSecond === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="identified_root_acceptable_verification_second">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" readonly name="identified_root_acceptable_verification_second[${count}]" value="0" class="form-check-input" ${verificationValueSecond === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="identified_root_acceptable_verification_second">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="identified_root_acceptable_remarks_verification_second" class="form-label">Remarks</label>
                                                            <textarea readonly class="form-control" name="identified_root_acceptable_remarks_verification_second[${count}]" rows="4">${remarksReviewSecond}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the identified root HTML to the container
                                $('#identified-root').append(identifiedRootHtml);


                                setTimeout(function() {
                                    jQuery(".selectize-close-btn").selectize({
                                        plugins: ["remove_button"],
                                        persist: !1,
                                        create: !0,
                                        render: {
                                            item: function (e, a) {
                                                return '<div><a class="url_link" target="_blank" href="' + a(e.text) + '">"' + a(e.text) + '"</a></div>';
                                            },
                                        },
                                        onDelete: function (e) {
                                            return confirm(1 < e.length ? "Are you sure you want to remove these " + e.length + " items?" : 'Are you sure you want to remove "' + e[0] + '"?');
                                        },
                                    });
                                    jQuery('.url_link').click(function(){
                                        url = jQuery(this).attr('href');
                                        window.open(url, '_blank');
                                    });
                                }, 1000);
         
                                count++;
                                }, 3000);

                            });
         
                        }
         
                    }   
         
                    
         
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
        });

        $('#car-global-datatable').on('click', '.edit-closing', function () {

            var $action = '<div class="row mb-2">' +
                '<div class="form-group col-md-12">' +
                '<label for="closing_action" class="form-label">For Closure</label>' +
                '<select class="form-select closing_action" name="closing_action">' +
                    '<option value="Closed">For Closure</option>' +
                    '<option value="For Revision">For Revision</option>' +
                '</select>' +
                '</div>' +
            '</div>' +
            '<div class="row mb-2">' +
                '<div class="form-group col-md-12">' +
                '<label for="closing_action_remarks" class="form-label">Remarks </label>' +
                '<textarea class="form-control closing_action_remarks" name="closing_action_remarks" rows="4"></textarea>' +
                '</div>' +
            '</div>';
        
            jQuery('#car-closing').html($action);
        
            jQuery('#car-closing').removeClass();
            jQuery('#car-closing').addClass('mt-4');
            jQuery('#car-closing').addClass('row');
        
            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            
        
            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
        
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
        
            division = jQuery('.addCARFormIssuance .issued_by').val();
        
            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){
        
                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;
        
                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });
        
                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);
        
                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });
        
                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
        
        
        
        
            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#correction_closing').empty();
            $('#consequencesdiv_closing').empty();
        
            $.ajax({
                type: 'POST',
                url: '../car/getCorrectionAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != '[]'){
        
                        response = JSON.parse(response);
        
                        console.log(response);
        
                        var correctionEntries = JSON.parse(response[0].correction_entry);
                        var count = 0;
                        // Loop through correction entries and create HTML for each entry
                        correctionEntries.forEach(function (correction) {

                            var verificationValue = correction.correction_acceptable_verification !== undefined ? correction.correction_acceptable_verification : ''; // Added
                            var remarksReview = correction.correction_acceptable_remarks_verification !== undefined ? correction.correction_acceptable_remarks_verification : ''; 
            
                            var correctionHtml = `
                                <div class="col-lg-12 correction-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-12">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Correction</label>
                                                            <textarea class="form-control" name="correction[${count}]" rows="4">${correction.correction}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="correction_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${correction.correction_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="correction_completion_date[${count}]" value="${correction.correction_completion_date}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6 mt-2">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="correction_person_responsible_url[${count}]" value="${correction.correction_person_responsible_url}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">5.1 Was the nonconformity properly corrected?</label>

                                                    <div class="col-lg-3 text-inlign mb-2">
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="correction_acceptable_verification[${count}]" value="1" class="form-check-input" ${verificationValue === '1' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_verification">YES</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="correction_acceptable_verification[${count}]" value="0" class="form-check-input" ${verificationValue === '0' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_verification">NO</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label for="correction_acceptable_remarks_verification" class="form-label">Remarks</label>
                                                        <textarea class="form-control" name="correction_acceptable_remarks_verification[${count}]" rows="4">${remarksReview}</textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                
                            count++;
                            // Append the correction HTML to the container
                            $('#correction_closing').append(correctionHtml);
                        });
        
                        var consequenceEntries = JSON.parse(response[0].consequence_entry);
                        var count = 0;
                        // Loop through correction entries and create HTML for each entry
                        consequenceEntries.forEach(function (consequence) {

                            var verificationValue = consequence.consequence_acceptable_verification !== undefined ? consequence.consequence_acceptable_verification : ''; // Added
                            var remarksReview = consequence.consequence_acceptable_remarks_verification !== undefined ? consequence.consequence_acceptable_remarks_verification : ''; // Added
        
                            var consequenceHtml = `
                                <div class="col-lg-12 consequences-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-12">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Dealing with the consequences</label>
                                                            <textarea class="form-control" name="consequence[${count}]" rows="4">${consequence.consequence}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="consequence_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${consequence.consequence_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="consequence_completion_date[${count}]" value="${consequence.consequence_completion_date}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6 mt-2">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="consequence_person_responsible_url[${count}]" value="${consequence.consequence_person_responsible_url}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">5.2 Was the consequences properly handled or treated?</label>

                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="consequence_acceptable_verification[${count}]" value="1" class="form-check-input" ${verificationValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_verification">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="consequence_acceptable_verification[${count}]" value="0" class="form-check-input" ${verificationValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_verification">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="consequence_acceptable_remarks_verification" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="consequence_acceptable_remarks_verification[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            count++;
                            // Append the correction HTML to the container
                            $('#consequencesdiv_closing').append(consequenceHtml);
                        });
        
                    } else {
                        // car.notifyError();
                    }   
        
        
            
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        
        
            var car_id = jQuery(this).data('car_id');
                    jQuery('.car_id').val(car_id);
                    $('#risk-number_closing').empty();
                    $('#opportunity-number_closing').empty();
                    $('#rootcause_closing').empty();
                    $('#identified-root_closing').empty();
                 
                    $.ajax({
                        type: 'POST',
                        url: '../car/getCorrectiveAction', // Replace 'MyController' with your controller name
                        data: {car_id: car_id},
                        success: function (response) {
                            if(response != 'null'){
                                
                                response = JSON.parse(response);
                 
                                if(response[0]){
                                    $('input[name="existing_nonconformity"][value="'+ response[0].existing_nonconformity +'"]').prop('checked', true);
                                    $('input[name="update_doc_info"][value="'+ response[0].update_doc_info +'"]').prop('checked', true);
                                    $('input[name="opportunity_identified_yn"][value="'+ response[0].opportunity_identified +'"]').prop('checked', true);

                                    if(response[0].opportunity_identified == "1"){
                                        jQuery('#opportunity-number_closing').removeClass('hidden');
                                    } else {
                                        jQuery('#opportunity-number_closing').addClass('hidden');
                                    }
                 
                                    $('[name="existing_nonconformity_remarks"]').val(response[0].existing_nonconformity_remarks);
                                    $('[name="update_doc_info_remarks"]').val(response[0].update_doc_info_remarks);
                 
                                    var riskEntries = JSON.parse(response[0].risk_entry);
                                    var count = 0;
                                    riskEntries.forEach(function (risk) {
                                        var riskHtml = `
                                            <div class="col-lg-12 risk-number-repeatable">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="mb-3">
                                                            <div class="row">
                                                                <div class="col-xl-6">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Risk Number</label>
                                                                        <textarea rows="4" class="form-control" name="risk_number[${count}]">${risk.risk_number}</textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Details / Updates</label>
                                                                        <textarea rows="4" class="form-control" name="risk_number_details_update[${count}]">${risk.risk_number_details_update}</textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">File URL</label>
                                                                        <input type="text" class="form-control selectize-close-btn" readonly name="risk_number_attachment_url[${count}]" value="${risk.risk_number_attachment_url}">
                                                                    </div>
                                                                </div>
                
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        `;
                                        // Append the risk HTML to the container
                                        count++;
                                        $('#risk-number_closing').append(riskHtml);
                                    });
                 
                 
                                    var opportunityEntries = JSON.parse(response[0].opportunity_entry);
                                    var count = 0;
                                    opportunityEntries.forEach(function (opportunity) {
                                        var opportunityHtml = `
                                            <div class="col-lg-12 opportunity-number-repeatable">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="mb-3">
                                                            <div class="row">
                                                                <div class="col-xl-6">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Opportunity Number</label>
                                                                        <textarea rows="4" class="form-control" name="opportunity_number[${count}]">${opportunity.opportunity_number}</textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Opportunities Identified (if applicable)</label>
                                                                        <textarea rows="4" class="form-control" name="opportunity_identified[${count}]">${opportunity.opportunity_identified}</textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6">
                                                                    <div class="mb-3 mb-xl-0">
                                                                    <label class="form-label">File URL</label>
                                                                    <input type="text" class="form-control selectize-close-btn" readonly name="opportunity_number_attachment_url[${count}]" value="${opportunity.opportunity_number_attachment_url}">
                                                                    </div>
                                                                </div>
                                
                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        `;
                                        // Append the opportunity HTML to the container
                                        count++;
                                        $('#opportunity-number_closing').append(opportunityHtml);
                                    });
                 
                 
                                    var rootCauseEntries = JSON.parse(response[0].root_cause_entry);
                                    var count = 0;
                                    rootCauseEntries.forEach(function (rootCause) {
                                        var rootCauseHtml = `
                                            <div class="col-lg-12 rootcause-repeatable">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="mb-3">
                                                            <div class="row">
                                                                <div class="col-xl-3">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Root Cause Analysis Used</label>
                                                                        <input type="text" class="form-control" readonly name="rootcause[${count}]" value="${rootCause.rootcause}">
                                                                    </div>
                                                                </div>
                                          
                                                                <div class="col-xl-6">
                                                                    <div class="mb-3 mb-xl-0">
                                                                    <label class="form-label">File URL</label>
                                                                    <input type="text" class="form-control selectize-close-btn" readonly name="rootcause_file_url[${count}]" value="${rootCause.rootcause_file_url}">
                                                                    </div>
                                                                </div>
                                      
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        `;
                                        // Append the root cause HTML to the container
                                        count++;
                                        $('#rootcause_closing').append(rootCauseHtml);
                                    });
                 
                 
                                    var identifiedRootEntries = JSON.parse(response[0].identified_root_entry);
                                    var count = 0;
                                    identifiedRootEntries.forEach(function (identifiedRoot) {
 
                                        var issued_by = '';
                                        var issued_to = '';
                                        var section_name = '';
                
                                        var verificationValue = identifiedRoot.identified_root_acceptable_verification !== undefined ? identifiedRoot.identified_root_acceptable_verification : ''; // Added
                                        var remarksReview = identifiedRoot.identified_root_acceptable_remarks_verification !== undefined ? identifiedRoot.identified_root_acceptable_remarks_verification : ''; // Added
                                        
                                        var verificationValueSecond = identifiedRoot.identified_root_acceptable_verification_second !== undefined ? identifiedRoot.identified_root_acceptable_verification_second : ''; // Added
                                        var remarksReviewSecond = identifiedRoot.identified_root_acceptable_remarks_verification_second !== undefined ? identifiedRoot.identified_root_acceptable_remarks_verification_second : ''; // Added
                                        
                                        if(identifiedRoot.tpn_issued_by){
                                            $.ajax({
                                                type: 'POST',
                                                url: '../car/getDivisionByID', // Replace 'MyController' with your controller name
                                                data: {id: identifiedRoot.tpn_issued_by},
                                                success: function (response) {
                                                    response = JSON.parse(response);
                 
                                                    if(response[0]){
                                                         issued_by = response[0].div_name;
                                                    }
                                                }
                                            });
                                        }
                 
                                        if(identifiedRoot.tpn_issued_to){
                                            $.ajax({
                                                type: 'POST',
                                                url: '../car/getDepartmentByID', // Replace 'MyController' with your controller name
                                                data: {id: identifiedRoot.tpn_issued_to},
                                                success: function (response) {
                                                    response = JSON.parse(response);
                                                    if(response[0]){
                                                         issued_to = response[0].dep_name;
                                                    }
                                                }
                                            });
                                        }
                                        
                                        if(identifiedRoot.tpn_section){
                                            $.ajax({
                                                type: 'POST',
                                                url: '../car/getSectionByID', // Replace 'MyController' with your controller name
                                                data: {id: identifiedRoot.tpn_section},
                                                success: function (response) {
                                                    response = JSON.parse(response);
                                                    if(response[0]){
                                                         section_name = response[0].section_name;
                                                    }
                                                }
                                            });
                                        }
                 
                                        setTimeout(function() {
                 
                                        var identifiedRootHtml = `
                                            <div class="col-lg-12 identified-root-repeatable">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="mb-3">
                                                            <div class="row">
                                                                <div class="col-xl-6 mb-1">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Identified Root Cause</label>
                                                                        <textarea rows="4" class="form-control" name="identified_root[${count}]">${identifiedRoot.identified_root}</textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6 mb-1">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Corrective Action</label>
                                                                        <textarea rows="4" class="form-control" name="identified_root_corrective_action[${count}]">${identifiedRoot.identified_root_corrective_action}</textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 mb-1">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">TPN Control</label>
                                                                        <input type="text" readonly class="form-control" name="tpn_control[${count}]" value="${identifiedRoot.tpn_control}">
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 mb-2">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Person Responsible</label>
                                                                        <input type="text" readonly class="form-control" name="identified_root_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${identifiedRoot.identified_root_person_responsible}">
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Completion Date</label>
                                                                        <input type="date" readonly class="form-control" name="identified_root_completion_date[${count}]" value="${identifiedRoot.identified_root_completion_date}">
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 mb-1">
                                                                <div class="form-group">
                                                                    <label for="issued_by" class="form-label">Issued By</label>
                                                                    <input type="text" readonly class="form-control" name="" value="${issued_by}">
                                                                    <input type="hidden" readonly class="form-control" name="tpn_issued_by[${count}]" value="${identifiedRoot.tpn_issued_by}">
                                                                    <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                                </div>
                                                                </div>
                                                                <div class="col-xl-4 mb-1">
                                                                    <div class="form-group">
                                                                        <label for="issued_to" class="form-label">Issued To</label>
                                                                        <input type="text" readonly class="form-control" name="" value="${issued_to}">
                                                                        <input type="hidden" readonly class="form-control" name="tpn_issued_to[${count}]" value="${identifiedRoot.tpn_issued_to}">
                                                                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 mb-1">
                                                                    <div class="form-group">
                                                                        <label for="section" class="form-label">Section Unit</label>
                                                                        <input type="text" readonly class="form-control" name="" value="${section_name}">
                                                                        <input type="hidden" readonly class="form-control" name="section[${count}]" value="${identifiedRoot.section}">
                                                                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6">
                                                                    <div class="mb-3 mb-xl-0">
                                                                    <label class="form-label">File URL</label>
                                                                    <input type="text" class="form-control selectize-close-btn" readonly name="identified_root_attachment_url[${count}]"  value="${identifiedRoot.identified_root_attachment_url}">
                                                                    </div>
                                                                </div>
                                
                                                            </div>
                                                            <div class="row">
                                                                <label for="acceptable" class="form-label">5.3 Follow-up on Corrective Action after completion of all actions: <br> Where the corrective actions implemented</label>
                
                                                                <div class="col-lg-3 text-inlign mb-2">
                                                                    <div class="form-check form-check-inline">
                                                                        <input type="radio" name="identified_root_acceptable_verification[${count}]" value="1" class="form-check-input" ${verificationValue === '1' ? 'checked' : ''}>
                                                                        <label class="form-check-label" for="identified_root_acceptable_verification">YES</label>
                                                                    </div>
                                                                    <div class="form-check form-check-inline">
                                                                        <input type="radio" name="identified_root_acceptable_verification[${count}]" value="0" class="form-check-input" ${verificationValue === '0' ? 'checked' : ''}>
                                                                        <label class="form-check-label" for="identified_root_acceptable_verification">NO</label>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-lg-12">
                                                                    <label for="identified_root_acceptable_remarks_verification" class="form-label">Remarks</label>
                                                                    <textarea class="form-control" name="identified_root_acceptable_remarks_verification[${count}]" rows="4">${remarksReview}</textarea>
                                                                </div>
                                                            </div>
                
                                                            <div class="row">
                                                                <label for="acceptable" class="form-label">5.4 Effectivenes of Corrective Action for a period after implementation of all corrective actions <br> Did it prevent the Nonconformity (NC) from recurring after three months of monitoring? </label>
                
                                                                <div class="col-lg-3 text-inlign mb-2">
                                                                    <div class="form-check form-check-inline">
                                                                        <input type="radio" name="identified_root_acceptable_verification_second[${count}]" value="1" class="form-check-input" ${verificationValueSecond === '1' ? 'checked' : ''}>
                                                                        <label class="form-check-label" for="identified_root_acceptable_verification_second">YES</label>
                                                                    </div>
                                                                    <div class="form-check form-check-inline">
                                                                        <input type="radio" name="identified_root_acceptable_verification_second[${count}]" value="0" class="form-check-input" ${verificationValueSecond === '0' ? 'checked' : ''}>
                                                                        <label class="form-check-label" for="identified_root_acceptable_verification_second">NO</label>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-lg-12">
                                                                    <label for="identified_root_acceptable_remarks_verification_second" class="form-label">Remarks</label>
                                                                    <textarea class="form-control" name="identified_root_acceptable_remarks_verification_second[${count}]" rows="4">${remarksReviewSecond}</textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        `;
                                        // Append the identified root HTML to the container
                                        $('#identified-root_closing').append(identifiedRootHtml);
                
                                        setTimeout(function() {
                                            jQuery(".selectize-close-btn").selectize({
                                                plugins: ["remove_button"],
                                                persist: !1,
                                                create: !0,
                                                render: {
                                                    item: function (e, a) {
                                                        return '<div><a class="url_link" target="_blank" href="' + a(e.text) + '">"' + a(e.text) + '"</a></div>';
                                                    },
                                                },
                                                onDelete: function (e) {
                                                    return confirm(1 < e.length ? "Are you sure you want to remove these " + e.length + " items?" : 'Are you sure you want to remove "' + e[0] + '"?');
                                                },
                                            });
                                            jQuery('.url_link').click(function(){
                                                url = jQuery(this).attr('href');
                                                window.open(url, '_blank');
                                            });
                                        }, 1000);
                 
                                        count++;
                                        }, 3000);
                
                                    });
                 
                                }
                 
                            }   
                 
                 
                        },
                        error: function () {
                            // Handle errors
                            diList.notifyError();
                        }
                    });
        
        });

        $('#car-global-datatable').on('click', '.edit-closed', function () {

            jQuery('#saveClosing').addClass('hidden');
        
            var $action = '<div class="row mb-2">' +
                '<div class="form-group col-md-12">' +
                '<label for="closing_action" class="form-label">For Closure</label>' +
                '<select class="form-select closing_action" name="closing_action">' +
                    '<option value="Closed">For Closure</option>' +
                    '<option value="For Revision">For Revision</option>' +
                '</select>' +
                '</div>' +
            '</div>' +
            '<div class="row mb-2">' +
                '<div class="form-group col-md-12">' +
                '<label for="closing_action_remarks" class="form-label">Remarks </label>' +
                '<textarea class="form-control closing_action_remarks" name="closing_action_remarks" rows="4"></textarea>' +
                '</div>' +
            '</div>';
        
            jQuery('#car-closing').html($action);
        
            jQuery('#car-closing').removeClass();
            jQuery('#car-closing').addClass('mt-4');
            jQuery('#car-closing').addClass('row');
        
            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            
        
            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
        
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
        
            division = jQuery('.addCARFormIssuance .issued_by').val();
        
            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){
        
                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;
        
                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });
        
                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);
        
                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });
        
                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
        
        
        
        
            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#correction_closing').empty();
            $('#consequencesdiv_closing').empty();
        
            $.ajax({
                type: 'POST',
                url: '../car/getCorrectionAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != '[]'){
        
                        response = JSON.parse(response);
        
                        console.log(response);
        
                        var correctionEntries = JSON.parse(response[0].correction_entry);
                        var count = 0;
                        // Loop through correction entries and create HTML for each entry
                        correctionEntries.forEach(function (correction) {
        
                            var verificationValue = correction.correction_acceptable_verification !== undefined ? correction.correction_acceptable_verification : ''; // Added
                            var remarksReview = correction.correction_acceptable_remarks_verification !== undefined ? correction.correction_acceptable_remarks_verification : ''; 
            
                            var correctionHtml = `
                                <div class="col-lg-12 correction-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-12">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Correction</label>
                                                            <textarea class="form-control" name="correction[${count}]" rows="4">${correction.correction}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="correction_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${correction.correction_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="correction_completion_date[${count}]" value="${correction.correction_completion_date}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6 mt-2">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="correction_person_responsible_url[${count}]" value="${correction.correction_person_responsible_url}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">5.1 Was the nonconformity properly corrected?</label>
        
                                                    <div class="col-lg-3 text-inlign mb-2">
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="correction_acceptable_verification[${count}]" value="1" class="form-check-input" ${verificationValue === '1' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_verification">YES</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="correction_acceptable_verification[${count}]" value="0" class="form-check-input" ${verificationValue === '0' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_verification">NO</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label for="correction_acceptable_remarks_verification" class="form-label">Remarks</label>
                                                        <textarea class="form-control" name="correction_acceptable_remarks_verification[${count}]" rows="4">${remarksReview}</textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
        
                            count++;
                            // Append the correction HTML to the container
                            $('#correction_closing').append(correctionHtml);
                        });
        
                        var consequenceEntries = JSON.parse(response[0].consequence_entry);
                        var count = 0;
                        // Loop through correction entries and create HTML for each entry
                        consequenceEntries.forEach(function (consequence) {
        
                            var verificationValue = consequence.consequence_acceptable_verification !== undefined ? consequence.consequence_acceptable_verification : ''; // Added
                            var remarksReview = consequence.consequence_acceptable_remarks_verification !== undefined ? consequence.consequence_acceptable_remarks_verification : ''; // Added
        
                            var consequenceHtml = `
                                <div class="col-lg-12 consequences-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-12">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Dealing with the consequences</label>
                                                            <textarea class="form-control" name="consequence[${count}]" rows="4">${consequence.consequence}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="consequence_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${consequence.consequence_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="consequence_completion_date[${count}]" value="${consequence.consequence_completion_date}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6 mt-2">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control selectize-close-btn" readonly name="consequence_person_responsible_url[${count}]" value="${consequence.consequence_person_responsible_url}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">5.2 Was the consequences properly handled or treated?</label>
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="consequence_acceptable_verification[${count}]" value="1" class="form-check-input" ${verificationValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_verification">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="consequence_acceptable_verification[${count}]" value="0" class="form-check-input" ${verificationValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_verification">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="consequence_acceptable_remarks_verification" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="consequence_acceptable_remarks_verification[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            count++;
                            // Append the correction HTML to the container
                            $('#consequencesdiv_closing').append(consequenceHtml);
                        });
        
                    } else {
                        // car.notifyError();
                    }   
        
        
            
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        
        
            var car_id = jQuery(this).data('car_id');
                    jQuery('.car_id').val(car_id);
                    $('#risk-number_closing').empty();
                    $('#opportunity-number_closing').empty();
                    $('#rootcause_closing').empty();
                    $('#identified-root_closing').empty();
                 
                    $.ajax({
                        type: 'POST',
                        url: '../car/getCorrectiveAction', // Replace 'MyController' with your controller name
                        data: {car_id: car_id},
                        success: function (response) {
                            if(response != 'null'){
                                
                                response = JSON.parse(response);
                 
                                if(response[0]){
                                    $('input[name="existing_nonconformity"][value="'+ response[0].existing_nonconformity +'"]').prop('checked', true);
                                    $('input[name="update_doc_info"][value="'+ response[0].update_doc_info +'"]').prop('checked', true);
                                    $('input[name="opportunity_identified_yn"][value="'+ response[0].opportunity_identified +'"]').prop('checked', true);
        
                                    if(response[0].opportunity_identified == "1"){
                                        jQuery('#opportunity-number_closing').removeClass('hidden');
                                    } else {
                                        jQuery('#opportunity-number_closing').addClass('hidden');
                                    }
                 
                                    $('[name="existing_nonconformity_remarks"]').val(response[0].existing_nonconformity_remarks);
                                    $('[name="update_doc_info_remarks"]').val(response[0].update_doc_info_remarks);
                 
                                    var riskEntries = JSON.parse(response[0].risk_entry);
                                    var count = 0;
                                    riskEntries.forEach(function (risk) {
                                        var riskHtml = `
                                            <div class="col-lg-12 risk-number-repeatable">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="mb-3">
                                                            <div class="row">
                                                                <div class="col-xl-6">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Risk Number</label>
                                                                        <textarea rows="4" class="form-control" name="risk_number[${count}]">${risk.risk_number}</textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Details / Updates</label>
                                                                        <textarea rows="4" class="form-control" name="risk_number_details_update[${count}]">${risk.risk_number_details_update}</textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">File URL</label>
                                                                        <input type="text" class="form-control selectize-close-btn" readonly name="risk_number_attachment_url[${count}]" value="${risk.risk_number_attachment_url}">
                                                                    </div>
                                                                </div>
                
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        `;
                                        // Append the risk HTML to the container
                                        count++;
                                        $('#risk-number_closing').append(riskHtml);
                                    });
                 
                 
                                    var opportunityEntries = JSON.parse(response[0].opportunity_entry);
                                    var count = 0;
                                    opportunityEntries.forEach(function (opportunity) {
                                        var opportunityHtml = `
                                            <div class="col-lg-12 opportunity-number-repeatable">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="mb-3">
                                                            <div class="row">
                                                                <div class="col-xl-6">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Opportunity Number</label>
                                                                        <textarea rows="4" class="form-control" name="opportunity_number[${count}]">${opportunity.opportunity_number}</textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Opportunities Identified (if applicable)</label>
                                                                        <textarea rows="4" class="form-control" name="opportunity_identified[${count}]">${opportunity.opportunity_identified}</textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6">
                                                                    <div class="mb-3 mb-xl-0">
                                                                    <label class="form-label">File URL</label>
                                                                    <input type="text" class="form-control selectize-close-btn" readonly name="opportunity_number_attachment_url[${count}]" value="${opportunity.opportunity_number_attachment_url}">
                                                                    </div>
                                                                </div>
                                
                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        `;
                                        // Append the opportunity HTML to the container
                                        count++;
                                        $('#opportunity-number_closing').append(opportunityHtml);
                                    });
                 
                 
                                    var rootCauseEntries = JSON.parse(response[0].root_cause_entry);
                                    var count = 0;
                                    rootCauseEntries.forEach(function (rootCause) {
                                        var rootCauseHtml = `
                                            <div class="col-lg-12 rootcause-repeatable">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="mb-3">
                                                            <div class="row">
                                                                <div class="col-xl-3">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Root Cause Analysis Used</label>
                                                                        <input type="text" class="form-control" readonly name="rootcause[${count}]" value="${rootCause.rootcause}">
                                                                    </div>
                                                                </div>
                                          
                                                                <div class="col-xl-6">
                                                                    <div class="mb-3 mb-xl-0">
                                                                    <label class="form-label">File URL</label>
                                                                    <input type="text" class="form-control selectize-close-btn" readonly name="rootcause_file_url[${count}]" value="${rootCause.rootcause_file_url}">
                                                                    </div>
                                                                </div>
                                      
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        `;
                                        // Append the root cause HTML to the container
                                        count++;
                                        $('#rootcause_closing').append(rootCauseHtml);
                                    });
                 
                 
                                    var identifiedRootEntries = JSON.parse(response[0].identified_root_entry);
                                    var count = 0;
                                    identifiedRootEntries.forEach(function (identifiedRoot) {
        
                                        var issued_by = '';
                                        var issued_to = '';
                                        var section_name = '';
                
                                        var verificationValue = identifiedRoot.identified_root_acceptable_verification !== undefined ? identifiedRoot.identified_root_acceptable_verification : ''; // Added
                                        var remarksReview = identifiedRoot.identified_root_acceptable_remarks_verification !== undefined ? identifiedRoot.identified_root_acceptable_remarks_verification : ''; // Added
                                        
                                        var verificationValueSecond = identifiedRoot.identified_root_acceptable_verification_second !== undefined ? identifiedRoot.identified_root_acceptable_verification_second : ''; // Added
                                        var remarksReviewSecond = identifiedRoot.identified_root_acceptable_remarks_verification_second !== undefined ? identifiedRoot.identified_root_acceptable_remarks_verification_second : ''; // Added
                                        
                                        if(identifiedRoot.tpn_issued_by){
                                            $.ajax({
                                                type: 'POST',
                                                url: '../car/getDivisionByID', // Replace 'MyController' with your controller name
                                                data: {id: identifiedRoot.tpn_issued_by},
                                                success: function (response) {
                                                    response = JSON.parse(response);
                 
                                                    if(response[0]){
                                                         issued_by = response[0].div_name;
                                                    }
                                                }
                                            });
                                        }
                 
                                        if(identifiedRoot.tpn_issued_to){
                                            $.ajax({
                                                type: 'POST',
                                                url: '../car/getDepartmentByID', // Replace 'MyController' with your controller name
                                                data: {id: identifiedRoot.tpn_issued_to},
                                                success: function (response) {
                                                    response = JSON.parse(response);
                                                    if(response[0]){
                                                         issued_to = response[0].dep_name;
                                                    }
                                                }
                                            });
                                        }
                                        
                                        if(identifiedRoot.tpn_section){
                                            $.ajax({
                                                type: 'POST',
                                                url: '../car/getSectionByID', // Replace 'MyController' with your controller name
                                                data: {id: identifiedRoot.tpn_section},
                                                success: function (response) {
                                                    response = JSON.parse(response);
                                                    if(response[0]){
                                                         section_name = response[0].section_name;
                                                    }
                                                }
                                            });
                                        }
                 
                                        setTimeout(function() {
                 
                                        var identifiedRootHtml = `
                                            <div class="col-lg-12 identified-root-repeatable">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="mb-3">
                                                            <div class="row">
                                                                <div class="col-xl-6 mb-1">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Identified Root Cause</label>
                                                                        <textarea rows="4" class="form-control" name="identified_root[${count}]">${identifiedRoot.identified_root}</textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6 mb-1">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Corrective Action</label>
                                                                        <textarea rows="4" class="form-control" name="identified_root_corrective_action[${count}]">${identifiedRoot.identified_root_corrective_action}</textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 mb-1">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">TPN Control</label>
                                                                        <input type="text" readonly class="form-control" name="tpn_control[${count}]" value="${identifiedRoot.tpn_control}">
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 mb-2">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Person Responsible</label>
                                                                        <input type="text" readonly class="form-control" name="identified_root_person_responsible[${count}]" placeholder="Enter Name of personnel" value="${identifiedRoot.identified_root_person_responsible}">
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4">
                                                                    <div class="mb-3 mb-xl-0">
                                                                        <label class="form-label">Completion Date</label>
                                                                        <input type="date" readonly class="form-control" name="identified_root_completion_date[${count}]" value="${identifiedRoot.identified_root_completion_date}">
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 mb-1">
                                                                <div class="form-group">
                                                                    <label for="issued_by" class="form-label">Issued By</label>
                                                                    <input type="text" readonly class="form-control" name="" value="${issued_by}">
                                                                    <input type="hidden" readonly class="form-control" name="tpn_issued_by[${count}]" value="${identifiedRoot.tpn_issued_by}">
                                                                    <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                                </div>
                                                                </div>
                                                                <div class="col-xl-4 mb-1">
                                                                    <div class="form-group">
                                                                        <label for="issued_to" class="form-label">Issued To</label>
                                                                        <input type="text" readonly class="form-control" name="" value="${issued_to}">
                                                                        <input type="hidden" readonly class="form-control" name="tpn_issued_to[${count}]" value="${identifiedRoot.tpn_issued_to}">
                                                                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 mb-1">
                                                                    <div class="form-group">
                                                                        <label for="section" class="form-label">Section Unit</label>
                                                                        <input type="text" readonly class="form-control" name="" value="${section_name}">
                                                                        <input type="hidden" readonly class="form-control" name="section[${count}]" value="${identifiedRoot.section}">
                                                                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6">
                                                                    <div class="mb-3 mb-xl-0">
                                                                    <label class="form-label">File URL</label>
                                                                    <input type="text" class="form-control selectize-close-btn" readonly name="identified_root_attachment_url[${count}]"  value="${identifiedRoot.identified_root_attachment_url}">
                                                                    </div>
                                                                </div>
                                
                                                            </div>
                                                            <div class="row">
                                                                <label for="acceptable" class="form-label">5.3 Follow-up on Corrective Action after completion of all actions: <br> Where the corrective actions implemented</label>
                
                                                                <div class="col-lg-3 text-inlign mb-2">
                                                                    <div class="form-check form-check-inline">
                                                                        <input type="radio" name="identified_root_acceptable_verification[${count}]" value="1" class="form-check-input" ${verificationValue === '1' ? 'checked' : ''}>
                                                                        <label class="form-check-label" for="identified_root_acceptable_verification">YES</label>
                                                                    </div>
                                                                    <div class="form-check form-check-inline">
                                                                        <input type="radio" name="identified_root_acceptable_verification[${count}]" value="0" class="form-check-input" ${verificationValue === '0' ? 'checked' : ''}>
                                                                        <label class="form-check-label" for="identified_root_acceptable_verification">NO</label>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-lg-12">
                                                                    <label for="identified_root_acceptable_remarks_verification" class="form-label">Remarks</label>
                                                                    <textarea class="form-control" name="identified_root_acceptable_remarks_verification[${count}]" rows="4">${remarksReview}</textarea>
                                                                </div>
                                                            </div>
                
                                                            <div class="row">
                                                                <label for="acceptable" class="form-label">5.4 Effectivenes of Corrective Action for a period after implementation of all corrective actions <br> Did it prevent the Nonconformity (NC) from recurring after three months of monitoring? </label>
                
                                                                <div class="col-lg-3 text-inlign mb-2">
                                                                    <div class="form-check form-check-inline">
                                                                        <input type="radio" name="identified_root_acceptable_verification_second[${count}]" value="1" class="form-check-input" ${verificationValueSecond === '1' ? 'checked' : ''}>
                                                                        <label class="form-check-label" for="identified_root_acceptable_verification_second">YES</label>
                                                                    </div>
                                                                    <div class="form-check form-check-inline">
                                                                        <input type="radio" name="identified_root_acceptable_verification_second[${count}]" value="0" class="form-check-input" ${verificationValueSecond === '0' ? 'checked' : ''}>
                                                                        <label class="form-check-label" for="identified_root_acceptable_verification_second">NO</label>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-lg-12">
                                                                    <label for="identified_root_acceptable_remarks_verification_second" class="form-label">Remarks</label>
                                                                    <textarea class="form-control" name="identified_root_acceptable_remarks_verification_second[${count}]" rows="4">${remarksReviewSecond}</textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        `;
                                        // Append the identified root HTML to the container
                                        $('#identified-root_closing').append(identifiedRootHtml);
                
                                        setTimeout(function() {
                                            jQuery(".selectize-close-btn").selectize({
                                                plugins: ["remove_button"],
                                                persist: !1,
                                                create: !0,
                                                render: {
                                                    item: function (e, a) {
                                                        return '<div><a class="url_link" target="_blank" href="' + a(e.text) + '">"' + a(e.text) + '"</a></div>';
                                                    },
                                                },
                                                onDelete: function (e) {
                                                    return confirm(1 < e.length ? "Are you sure you want to remove these " + e.length + " items?" : 'Are you sure you want to remove "' + e[0] + '"?');
                                                },
                                            });
                                            jQuery('.url_link').click(function(){
                                                url = jQuery(this).attr('href');
                                                window.open(url, '_blank');
                                            });
                                        }, 1000);
                 
                                        count++;
                                        }, 3000);
                
                                    });
                 
                                }
                 
                            }   
                 
                 
                        },
                        error: function () {
                            // Handle errors
                            diList.notifyError();
                        }
                    });
        
        });


        $('input[name="opportunity_identified_yn"]').change(function() {
            // Check if the value is 1 (YES)
            if ($(this).val() === "1") {
                // If yes, show the opportunity-number element
                $('#opportunity-number').show();
            } else {
                // If no, hide the opportunity-number element
                $('#opportunity-number').hide();
            }
        });

    },

    validateForm : function (){
        var isValid = true;
        
        // Check required fields
        $("#addCARForm [required]").each(function () {
            if ($(this).val() === "") {
                $(this).addClass('parsley-error');
                isValid = false;
                $(this).next('.parsley-errors-list').removeClass('hidden');
                $(this).next('.parsley-errors-list').find('.parsley-required').text('This field is required');
                // You can customize error handling here, for example, displaying an error message.
            } else {
                $(this).removeClass('parsley-error');
                $(this).next('.parsley-errors-list').addClass('hidden');
                $(this).next('.parsley-errors-list').find('.parsley-required').text('');
            }
        });
    
        return isValid;
    },

    validateFormIssuance : function (){
        var isValid = true;
        
        // Check required fields
        $("#addCARFormIssuance [required]").each(function () {
            if ($(this).val() === "") {
                $(this).addClass('parsley-error');
                isValid = false;
                $(this).next('.parsley-errors-list').removeClass('hidden');
                $(this).next('.parsley-errors-list').find('.parsley-required').text('This field is required');
                // You can customize error handling here, for example, displaying an error message.
            } else {
                $(this).removeClass('parsley-error');
                $(this).next('.parsley-errors-list').addClass('hidden');
                $(this).next('.parsley-errors-list').find('.parsley-required').text('');
            }
        });
    
        return isValid;
    },

    notifySuccess: function(){
        !(function (p) {
            "use strict";
            function t() {}
            (t.prototype.send = function (t, i, o, e, n, a, s, r) {
                var c = { heading: t, text: i, position: o, loaderBg: e, icon: n, hideAfter: (a = a || 3e3), stack: (s = s || 1) };
                r && (c.showHideTransition = r), console.log(c), p.toast().reset("all"), p.toast(c);
            }),
                (p.NotificationApp = new t()),
                (p.NotificationApp.Constructor = t);
        })(window.jQuery),
            (function (i) {
                "use strict";
                i.NotificationApp.send("Well Done!", "You successfully saved CAR", "top-right", "#5ba035", "success");
        })(window.jQuery);
    },

    notifyError: function(){
        !(function (p) {
            "use strict";
            function t() {}
            (t.prototype.send = function (t, i, o, e, n, a, s, r) {
                var c = { heading: t, text: i, position: o, loaderBg: e, icon: n, hideAfter: (a = a || 3e3), stack: (s = s || 1) };
                r && (c.showHideTransition = r), console.log(c), p.toast().reset("all"), p.toast(c);
            }),
                (p.NotificationApp = new t()),
                (p.NotificationApp.Constructor = t);
        })(window.jQuery),
            (function (i) {
                "use strict";
                i.NotificationApp.send("Oh snap!", "Change a few things up and try submitting again.", "top-right", "#bf441d", "danger");
        })(window.jQuery);
    },

    saveCar: function(){
        jQuery('#saveCar').click(function(e){
            e.preventDefault();
    
            if (car.validateForm()) {
    
                var car_no = jQuery('#car_no').val();
                var identification_date = jQuery('#identification_date').val();
                var source = jQuery('#source').val();
                var requestor = jQuery('#requestor').val();
                var issued_by = jQuery('#issued_by').val();
                var issued_to = jQuery('#issued_to').val();
                var findings = jQuery('#findings').val();
                var consequences = jQuery('#consequences').val();
                var requirements_not_fulfilled = jQuery('#requirements_not_fulfilled').val();
                
                var data = {
                    'car_no' : car_no,
                    'identification_date' : identification_date,
                    'source' : source,
                    'requestor' : requestor,
                    'issued_by' : issued_by,
                    'issued_to' : issued_to,
                    'findings' : findings,
                    'consequences' : consequences,
                    'requirements_not_fulfilled': requirements_not_fulfilled
                }
    
                jQuery("#add-car").modal('toggle');
    
                $.ajax({
                    type: 'POST',
                    url: '../car/save', // Replace 'MyController' with your controller name
                    data: data,
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            car.notifySuccess();
                            car.load();
                            $('#addCARForm')[0].reset();
                        } else {
                            car.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        car.notifyError();
                    }
                });
            }
    
        });


        jQuery('#saveCarIssuance').click(function(e){
            e.preventDefault();
    
            if (car.validateFormIssuance()) {

                var car_id = jQuery('#addCARFormIssuance .car_id').val();
                var issued_to = jQuery('#addCARFormIssuance .issued_to').val();
                var section = jQuery('#addCARFormIssuance .section').val();
                var issuance_of_nc = jQuery('#addCARFormIssuance .issuance_of_nc').val();
                var issuance_of_nc_remarks = jQuery('#addCARFormIssuance .issuance_of_nc_remarks').val();
                
                var data = {
                    'car_id' : car_id,
                    'issued_to' : issued_to,
                    'section' : section,
                    'issuance_of_nc': issuance_of_nc,
                    'issuance_of_nc_remarks': issuance_of_nc_remarks,
                }
    
                jQuery("#add-car-issuance").modal('toggle');
    
                $.ajax({
                    type: 'POST',
                    url: '../car/issuanceSave', // Replace 'MyController' with your controller name
                    data: data,
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            car.notifySuccess();
                            car.load();
                            $('#addCARFormIssuance')[0].reset();
                        } else {
                            car.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        car.notifyError();
                    }
                });
            }
    
        });



        jQuery('#saveRoot').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#root_cause_form")[0]);


            if(jQuery('#car-action.corrective-action').length){
                // Iterate over file inputs and append to formData
                var action = "../car/saveRoot";
            } else if(jQuery('#car-action.corrective-action-review').length){
                var action = "../car/saveRootFR";
            } else if(jQuery('#car-action.corrective-action-approval').length){
                var action = "../car/saveRootFA";
            } else if(jQuery('#car-action.corrective-action-verification').length){
                var action = "../car/saveRootFV";
            } else if(jQuery('#car-action.corrective-action-validation').length){
                var action = "../car/saveRootFVA";
            }

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: action, // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#root_cause_form')[0].reset();
                        $('#root-cause').modal('hide');
                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });


        });

        jQuery('#saveRootFR').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#root_cause_form_review")[0]);

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: "../car/saveRootFR", // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#root_cause_form_review')[0].reset();
                        $('#root-cause-review').modal('hide');
                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        });

        jQuery('#saveRootFA').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#root_cause_form_approval")[0]);

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: "../car/saveRootFA", // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#root_cause_form_approval')[0].reset();
                        $('#root-cause-approval').modal('hide');
                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        });

        jQuery('#saveRootFV').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#root_cause_form_verification")[0]);

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: "../car/saveRootFV", // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#root_cause_form_verification')[0].reset();
                        $('#root-cause-verification').modal('hide');
                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        });

        jQuery('#saveRootFVA').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#root_cause_form_validation")[0]);

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: "../car/saveRootFVA", // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#root_cause_form_validation')[0].reset();
                        $('#root-cause-validation').modal('hide');
                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        });

        jQuery('#saveClosing').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#root_cause_form_closing")[0]);

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: "../car/saveClosing", // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#closing').modal('hide');

                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        });

        jQuery('#saveCorrection').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#correction_form")[0]);

            if(jQuery('#car-correction-action.correction-action').length){
                var action = "../car/saveCorrection";
            } else if(jQuery('#car-correction-action.correction-action-review').length){
                var action = "../car/saveCorrectionFR";
            } else if(jQuery('#car-correction-action.correction-action-approval').length){
                var action = "../car/saveCorrectionFA";
            } else if(jQuery('#car-correction-action.correction-action-verification').length){
                var action = "../car/saveCorrectionFV";
            } else if(jQuery('#car-correction-action.correction-action-validation').length){
                var action = "../car/saveCorrectionFVA";
            }

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: action, // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#correction_form')[0].reset();
                        $('#corrective-action').modal('hide');

                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        });

        jQuery('#saveCorrectionFR').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#correction_form_review")[0]);

            console.log(formData);

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: "../car/saveCorrectionFR", // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#correction_form_review')[0].reset();
                        $('#corrective-action-review').modal('hide');

                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        });

        jQuery('#saveCorrectionFA').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#correction_form_approval")[0]);

            console.log(formData);

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: "../car/saveCorrectionFA", // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#correction_form_approval')[0].reset();
                        $('#corrective-action-approval').modal('hide');

                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        });

        jQuery('#saveCorrectionFV').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#correction_form_verification")[0]);

            console.log(formData);

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: "../car/saveCorrectionFV", // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#correction_form_verification')[0].reset();
                        $('#corrective-action-verification').modal('hide');

                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        });

        jQuery('#saveCorrectionFVA').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#correction_form_validation")[0]);

            console.log(formData);

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: "../car/saveCorrectionFVA", // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#correction_form_validation')[0].reset();
                        $('#corrective-action-validation').modal('hide');

                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        });



    },

    correction: function(){
        $("#add-correction").on("click", function(){
            // Clone the first .correction-repeatable div
            var clone = $(".correction-repeatable:last").clone();
            
            // Clear input values in the cloned section
            clone.find('input').val('');
    
            // Append the cloned section to the parent container
            $(".correction-repeatable:last").after(clone);
    
            // Show the remove button for the new entry
            clone.find('.remove-corrective-action').show();
    
            // Add Remove Correction button click event for the new entry
            clone.find('.remove-corrective-action').on("click", function(){
                // Check if there is more than one entry before removal
                if ($('.correction-repeatable').length > 1) {
                    $(this).closest('.correction-repeatable').remove();
                }
            });


            clone.find('.plugin-remove_button').remove();
        
            // Initialize Selectize for the cloned input
            clone.find('input.selectize-close-btn').selectize({
                plugins: ["remove_button"],
                persist: false,
                create: true,
                render: {
                    item: function (e, a) {
                        return '<div><a class="url_link" target="_blank" href="' + a(e.text) + '">"' + a(e.text) + '"</a></div>';
                    },
                },
                onDelete: function (e) {
                    return confirm(1 < e.length ? "Are you sure you want to remove these " + e.length + " items?" : 'Are you sure you want to remove "' + e[0] + '"?');
                },
            });
            jQuery('.url_link').click(function(){
                url = jQuery(this).attr('href');
                window.open(url, '_blank');
            });
        });
    
        // Remove Correction button click event for the initial entry
        $(".remove-corrective-action").on("click", function(){
            // Check if there is more than one entry before removal
            if ($('.correction-repeatable').length > 1) {
                $(this).closest('.correction-repeatable').remove();
            }
        });
    }, 

    consequences : function (){
        $("#add-consequences").on("click", function(){
            // Clone the first .consequences-repeatable div
            var clone = $(".consequences-repeatable:last").clone();
            
            // Clear input values in the cloned section
            clone.find('input').val('');
    
            // Append the cloned section to the parent container
            $(".consequences-repeatable:last").after(clone);
    
            // Show the remove button for the new entry
            clone.find('.remove-consequences-action').show();
    
            // Add Remove Consequences button click event for the new entry
            clone.find('.remove-consequences-action').on("click", function(){
                // Check if there is more than one entry before removal
                if ($('.consequences-repeatable').length > 1) {
                    $(this).closest('.consequences-repeatable').remove();
                }
            });

            clone.find('.plugin-remove_button').remove();
        
            // Initialize Selectize for the cloned input
            clone.find('input.selectize-close-btn').selectize({
                plugins: ["remove_button"],
                persist: false,
                create: true,
                render: {
                    item: function (e, a) {
                        return '<div><a class="url_link" target="_blank" href="' + a(e.text) + '">"' + a(e.text) + '"</a></div>';
                    },
                },
                onDelete: function (e) {
                    return confirm(1 < e.length ? "Are you sure you want to remove these " + e.length + " items?" : 'Are you sure you want to remove "' + e[0] + '"?');
                },
            });
            jQuery('.url_link').click(function(){
                url = jQuery(this).attr('href');
                window.open(url, '_blank');
            });
        });
    
        // Remove Consequences button click event for the initial entry
        $(".remove-consequences-action").on("click", function(){
            // Check if there is more than one entry before removal
            if ($('.consequences-repeatable').length > 1) {
                $(this).closest('.consequences-repeatable').remove();
            }
        });

    },

    riskNumber: function(){
        $("#add-risk-number").on("click", function(){
            // Clone the first .risk-number-repeatable div
            var clone = $(".risk-number-repeatable:last").clone();
            
            // Clear input values in the cloned section
            clone.find('input').val('');
    
            // Append the cloned section to the parent container
            $(".risk-number-repeatable:last").after(clone);
    
            // Show the remove button for the new entry
            clone.find('.remove-risk-number-action').show();
    
            // Add Remove Risk Number button click event for the new entry
            clone.find('.remove-risk-number-action').on("click", function(){
                // Check if there is more than one entry before removal
                if ($('.risk-number-repeatable').length > 1) {
                    $(this).closest('.risk-number-repeatable').remove();
                }
            });


            clone.find('.plugin-remove_button').remove();
        
            // Initialize Selectize for the cloned input
            clone.find('input.selectize-close-btn').selectize({
                plugins: ["remove_button"],
                persist: false,
                create: true,
                render: {
                    item: function (e, a) {
                        return '<div><a class="url_link" target="_blank" href="' + a(e.text) + '">"' + a(e.text) + '"</a></div>';
                    },
                },
                onDelete: function (e) {
                    return confirm(1 < e.length ? "Are you sure you want to remove these " + e.length + " items?" : 'Are you sure you want to remove "' + e[0] + '"?');
                },
            });
            jQuery('.url_link').click(function(){
                url = jQuery(this).attr('href');
                window.open(url, '_blank');
            });
        });
    
        // Remove Risk Number button click event for the initial entry
        $(".remove-risk-number-action").on("click", function(){
            // Check if there is more than one entry before removal
            if ($('.risk-number-repeatable').length > 1) {
                $(this).closest('.risk-number-repeatable').remove();
            }
        });
    },

    opportunityNumber: function (){
        $("#add-opportunity-number").on("click", function(){
            // Clone the first .opportunity-number-repeatable div
            var clone = $(".opportunity-number-repeatable:last").clone();
            
            // Clear input values in the cloned section
            clone.find('input').val('');
    
            // Append the cloned section to the parent container
            $(".opportunity-number-repeatable:last").after(clone);
    
            // Show the remove button for the new entry
            clone.find('.remove-opportunity-number-action').show();
    
            // Add Remove Opportunity Number button click event for the new entry
            clone.find('.remove-opportunity-number-action').on("click", function(){
                // Check if there is more than one entry before removal
                if ($('.opportunity-number-repeatable').length > 1) {
                    $(this).closest('.opportunity-number-repeatable').remove();
                }
            });

            clone.find('.plugin-remove_button').remove();
        
            // Initialize Selectize for the cloned input
            clone.find('input.selectize-close-btn').selectize({
                plugins: ["remove_button"],
                persist: false,
                create: true,
                render: {
                    item: function (e, a) {
                        return '<div><a class="url_link" target="_blank" href="' + a(e.text) + '">"' + a(e.text) + '"</a></div>';
                    },
                },
                onDelete: function (e) {
                    return confirm(1 < e.length ? "Are you sure you want to remove these " + e.length + " items?" : 'Are you sure you want to remove "' + e[0] + '"?');
                },
            });
            jQuery('.url_link').click(function(){
                url = jQuery(this).attr('href');
                window.open(url, '_blank');
            });
        });
    
        // Remove Opportunity Number button click event for the initial entry
        $(".remove-opportunity-number-action").on("click", function(){
            // Check if there is more than one entry before removal
            if ($('.opportunity-number-repeatable').length > 1) {
                $(this).closest('.opportunity-number-repeatable').remove();
            }
        });
    },

    rootCause: function(){
        $("#add-rootcause").on("click", function(){

            // Clone the first .rootcause-repeatable div
            var clone = $('#rootcause').find(".rootcause-repeatable:last").clone();
        
            // Destroy existing Selectize instance
            clone.find('.selectized').each(function() {
                var selectizeInstance = $(this)[0].selectize;
                if (selectizeInstance) {
                    selectizeInstance.destroy();
                }
            });
        
            // Clear input values in the cloned section
            clone.find('input').val('');
        
            // Append the cloned section to the parent container
            $('#rootcause').find(".rootcause-repeatable:last").after(clone);
        
            // Show the remove button for the new entry
            clone.find('.remove-rootcause-action').show();
        
            // Add Remove Root Cause button click event for the new entry
            clone.find('.remove-rootcause-action').on("click", function(){
                // Check if there is more than one entry before removal
                if ($('.rootcause-repeatable').length > 1) {
                    $(this).closest('.rootcause-repeatable').remove();
                }
            });

            clone.find('.plugin-remove_button').remove();
        
            // Initialize Selectize for the cloned input
            clone.find('input.selectize-close-btn').selectize({
                plugins: ["remove_button"],
                persist: false,
                create: true,
                render: {
                    item: function (e, a) {
                        return '<div><a class="url_link" target="_blank" href="' + a(e.text) + '">"' + a(e.text) + '"</a></div>';
                    },
                },
                onDelete: function (e) {
                    return confirm(1 < e.length ? "Are you sure you want to remove these " + e.length + " items?" : 'Are you sure you want to remove "' + e[0] + '"?');
                },
            });
            jQuery('.url_link').click(function(){
                url = jQuery(this).attr('href');
                window.open(url, '_blank');
            });
        });
    
        // Remove Root Cause button click event for the initial entry
        $(".remove-rootcause-action").on("click", function(){
            // Check if there is more than one entry before removal
            if ($('.rootcause-repeatable').length > 1) {
                $(this).closest('.rootcause-repeatable').remove();
            }
        });


        $('#identified-root').on('change', '.tpn-control', function () {

            var tpn_control = jQuery(this).val();

            console.log(tpn_control);

            if(tpn_control != 'total'){

                issued_by = jQuery(this).parent().parent().parent().find('.issued_by');
                issued_to = jQuery(this).parent().parent().parent().find('.issued_to');
                section = jQuery(this).parent().parent().parent().find('.section');

                issued_by.parent().show();
                issued_to.parent().show();
                section.parent().show();

                issued_by.change(function(){
        
                    division = jQuery(this).val();

                    issued_to = jQuery(this).parent().parent().parent().find('.issued_to');

        
                    $.ajax({
                        type: 'POST',
                        url: '../car/getDepartment', // Replace 'MyController' with your controller name
                        data: {division: division},
                        success: function (response) {
                            if(response != 'null'){
        
                                issued_to.html('<option value=""></option>');
                                $.each(JSON.parse(response), function (index, item) {
                                    // Access each item's properties
                                    var id = item.id;
                                    var dep_name = item.dep_name;
            
                                    var html = '<option value="'+id+'">'+dep_name+'</option>';
                                    // Do something with the data, for example, display it on the page
                                    issued_to.append(html);
                                });
        
                            }   
                        },
                        error: function () {
                            // Handle errors
                            diList.notifyError();
                        }
                    });
        
                }); 
                

                issued_to.change(function(){

                    section = jQuery(this).parent().parent().parent().find('.section');
                    department = jQuery(this).val();

                    $.ajax({
                        type: 'POST',
                        url: '../car/getSection', // Replace 'MyController' with your controller name
                        data: {department: department},
                        success: function (response) {
                            if(response != 'null'){
                                
                                section.html('<option value=""></option>');
                                $.each(JSON.parse(response), function (index, item) {
                                    // Access each item's properties
                                    var id = item.id;
                                    var section_name = item.section_name;
            
                                    var html = '<option value="'+id+'">'+section_name+'</option>';
                                    // Do something with the data, for example, display it on the page
                                    section.append(html);
                                });
        
                               
                            }   
                        },
                        error: function () {
                            // Handle errors
                            diList.notifyError();
                        }
                    });
                });


            } else {
                issued_by = jQuery(this).parent().parent().parent().find('.issued_by');
                issued_to = jQuery(this).parent().parent().parent().find('.issued_to');
                section = jQuery(this).parent().parent().parent().find('.section');

                issued_by.val();
                issued_to.val();
                section.val();

                issued_by.parent().hide();
                issued_to.parent().hide();
                section.parent().hide();
            }
            



        });
    },

    identifiedRoot: function(){
        $("#add-identified-root").on("click", function(){
            // Clone the first .identified-root-repeatable div
            var clone = jQuery('#identified-root').find(".identified-root-repeatable:last").clone();
            
            // Clear input values in the cloned section
            clone.find('input').val('');
    
            // Append the cloned section to the parent container
            jQuery('#identified-root').find(".identified-root-repeatable:last").after(clone);
    
            // Show the remove button for the new entry
            clone.find('.remove-identified-root-action').show();
    
            // Add Remove Identified Root Cause button click event for the new entry
            clone.find('.remove-identified-root-action').on("click", function(){
                // Check if there is more than one entry before removal
                if ($('.identified-root-repeatable').length > 1) {
                    $(this).closest('.identified-root-repeatable').remove();
                }
            });

            clone.find('.plugin-remove_button').remove();
        
            // Initialize Selectize for the cloned input
            clone.find('input.selectize-close-btn').selectize({
                plugins: ["remove_button"],
                persist: false,
                create: true,
                render: {
                    item: function (e, a) {
                        return '<div><a class="url_link" target="_blank" href="' + a(e.text) + '">"' + a(e.text) + '"</a></div>';
                    },
                },
                onDelete: function (e) {
                    return confirm(1 < e.length ? "Are you sure you want to remove these " + e.length + " items?" : 'Are you sure you want to remove "' + e[0] + '"?');
                },
            });
            jQuery('.url_link').click(function(){
                url = jQuery(this).attr('href');
                window.open(url, '_blank');
            });
        });
    
        // Remove Identified Root Cause button click event for the initial entry
        $(".remove-identified-root-action").on("click", function(){
            // Check if there is more than one entry before removal
            if ($('.identified-root-repeatable').length > 1) {
                $(this).closest('.identified-root-repeatable').remove();
            }
        });
    },

    carEdit: function(){
       
        $('#car-global-datatable').on('click', '.edit-car', function () {

            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');

            if($status == 'For Issuance of NC'){
                jQuery('#saveCarIssuance').removeClass('hidden');
            } else {
                
                jQuery('#saveCarIssuance').addClass('hidden');
            }
            

            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
        
            jQuery('#addCARFormIssuance .car_id').val($car_id);
            jQuery('#addCARFormIssuance .requestor').val($requestor);
            jQuery('#addCARFormIssuance .car_no').val($car_no);
            jQuery('#addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('#addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('#addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('#addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('#addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('#addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('#addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('#addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('#addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 

            division = jQuery('#addCARFormIssuance .issued_by').val();

            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){

                        $('#addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;

                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('#addCARFormIssuance .issued_to').append(html);
                        });

                        jQuery('#addCARFormIssuance .issued_to').val($issued_to);

                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('#addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('#addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('#addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });

                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });

        });

    },

}

jQuery(document).ready(function(){
    car.load();
    car.loadDepartment();
    car.saveCar();
    car.correction();
    car.consequences();
    car.riskNumber();
    car.opportunityNumber();
    car.rootCause();
    car.identifiedRoot();
    car.carEdit();
    car.loadCorrectiveAction();
});