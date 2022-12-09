$(document).ready(function () {
    function validerMdp() {
        let mdpValeur = $("#password").val();
        if (mdpValeur.length === "") {
            $("#passcheck").show();
            mdpErreur = false;
            return false;
        }
        if (mdpValeur.length < 3 || mdpValeur.length > 10) {
            $("#passcheck").show();
            $("#passcheck").html(
                "la longueur de votre mot de passe doit être comprise entre 3 et 10"
            );
            $("#passcheck").css("color", "red");
            mdpErreur = false;
            return false;
        } else {
            $("#passcheck").hide();
        }
    }

    $("#conpasscheck").hide();
    let confirmMdpErreur = true;
    $("#conpassword").keyup(function () {
        validateConfirmerMdr();
    });
    function validateConfirmerMdr() {
        let confirmPasswordValue = $("#conpassword").val();
        let valeurMdp = $("#password").val();
        if (valeurMdp != confirmPasswordValue) {
            $("#conpasscheck").show();
            $("#conpasscheck").html("Le mot de passe ne correspond pas");
            $("#conpasscheck").css("color", "red");
            confirmMdpErreur = false;
            return false;
        } else {
            $("#conpasscheck").hide();
        }
    }

    $("#submitbtn").click(function () {
        validerMdp();
        validateConfirmerMdr();
        if ( mdpErreur == true && confirmMdpErreur == true) {
            return true;
        } else {
            return false;
        }
    });
});
