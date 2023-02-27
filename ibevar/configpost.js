function addJQ() {
    var jq = document.createElement('script');
    jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
    document.getElementsByTagName('head')[0].appendChild(jq);
    jQuery.noConflict();
}
function addS2() {
    var jq = document.createElement('script');
    jq.src = "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";
    document.getElementsByTagName('head')[0].appendChild(jq);
    jQuery.noConflict();
}
addJQ();
addS2();
const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];

setTimeout(function(){
    $('.js-add-rule').click();
    $('.js-add-rule').click();
    $('.js-add-rule').click();
    $('#_content_restriction_rules_1_membership_plan_id').val(19905);
    $('#_content_restriction_rules_2_membership_plan_id').val(19890);
    $('#_content_restriction_rules_3_membership_plan_id').val(19726);
    
    const parts = $('[name="post_title"]').val().split('-').join().split('–').join().split(',').join().split('–');
    const categoria = parts[0].trim();
    const dataparts = parts[1].trim().split(' ');
    let data = '';
    if(dataparts.length>1){
        if(isNaN(parseInt(dataparts[0].trim()))){
            dataparts[0] = meses.indexOf(dataparts[0].toLowerCase())+1
            dataparts[0] = String(dataparts[0]).padStart(2,'0');
        }
        if(dataparts.length>2){
            dataparts[1] = dataparts[1]+dataparts[2];
                        
        }
        if(dataparts.length>3){
            dataparts[1] = dataparts[1]+dataparts[2]+dataparts[3]
        }
        data = dataparts[1] + ' ' + dataparts[0]
    }
    $('#metakeyselect').val('associacao_categoria');
    $('#metavalue').val(categoria);
    $('#newmeta-submit').click();
    setTimeout(function(){
        $('#metakeyselect').val('associacao_data');
        $('#metavalue').val(data);
        $('#newmeta-submit').click();
    },1000);
    //$('#publish').click();
},500);



