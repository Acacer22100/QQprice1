$(document).ready(function(){
  $('.QQ').on('keyup', '.quantity', function(){
    var price = 12;
    var quantity1 = $('#quantity1').val();
    var dis = Math.trunc(quantity1/11)*-12;
    var quantity2 = $('#quantity2').val();
    $(this).closest('.QQ').find('#tw12').text(price*(quantity1-quantity2));
    $(this).closest('.QQ').find('#tw10').text(dis);
    $(this).closest('.QQ').find('#tw15').text(quantity2*15);
    $(this).closest('.QQ').find('#total').text(price*(quantity1-quantity2)+quantity2*15+dis);
  });

  $('.QQ').on('click', '.quantity', function(){
    var price = 12;
    var quantity1 = $('#quantity1').val();
    var dis = Math.trunc(quantity1/11)*-12;
    var quantity2 = $('#quantity2').val();
    $(this).closest('.QQ').find('#tw12').text(price*(quantity1-quantity2));
    $(this).closest('.QQ').find('#tw10').text(dis);
    $(this).closest('.QQ').find('#tw15').text(quantity2*15);
    $(this).closest('.QQ').find('#total').text(price*(quantity1-quantity2)+quantity2*15+dis);
  });

  // 手動刷新按鈕
  $('#refreshBtn').click(function(){
    location.reload();
  });

  $('#quantity1', document.forms[0]).focus();
});

$(function () {
  setupEnterToNext();
});

function setupEnterToNext() {
  $(':input').keydown(function (e) {
    if ( e.keyCode == 110 || e.keyCode == 13  || e.keyCode == 0) {
        $(':input:visible:enabled:eq(' + ($(':input:visible:enabled').index(this) + 1) + ')').focus();
        e.preventDefault();
    }
  });
}
