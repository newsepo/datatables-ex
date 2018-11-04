$(document).ready(function () {

    var table = $('#myTable').DataTable({
        ajax: {
            'url':'MOCK_DATA.json', 
            'dataSrc':''
        },
        responsive: true,
        orderMulti: true,
        columns: [
            {"data": "id"},
            {"data": "first_name"},
            {"data": "last_name"}, 
            {"data": "email"}, 
            {"data": "gender"}, 
            {"data": "date"},
            {"data": "ip_address",
                "render": function(data, type){
                    if(type=='display'){
                        data = '<a href="'+ data + '">' + data + '</a>';
                    }
                    return data;
                }}
        ],
        "language": {
            "emptyTable": "데이터가 없어요.",
            "lengthMenu": "페이지당 _MENU_ 개씩 보기",
            "info": "현재 _START_ - _END_ / _TOTAL_건",
            "infoEmpty": "데이터 없음",
            "infoFiltered": "( _MAX_건의 데이터에서 필터링됨 )",
            "search": "에서 검색: ",
            "zeroRecords": "일치하는 데이터가 없어요.",
            "loadingRecords": "로딩중...",
            "processing":     "잠시만 기다려 주세요...",
            "paginate": {
                "next": "다음",
                "previous": "이전"
            }
        }
    });

    /* Column별 검색기능 추가 */
    $('#myTable_filter').prepend('<select id="select"></select>');
    $('#myTable > thead > tr').children().each(function (indexInArray, valueOfElement) { 
        $('#select').append('<option>'+valueOfElement.innerHTML+'</option>');
    });
    
    $('.dataTables_filter input').unbind().bind('keyup', function () {
        var colIndex = document.querySelector('#select').selectedIndex;
        table.column(colIndex).search(this.value).draw();
    });


});