var studentsList = $('.student-list'),
    numberOfStudents, pageSize=10;

studentsList.children().each(function(index){
    $(this).hide();
});
// studentsList.empty();

console.log(studentsList.length);
function filter(keyword){
    var regex= new RegExp(keyword,'i');
    var filteredStudents = [];
    studentsList.children().each(function(index){
        if(regex.test($(this).find('h3').text()) || regex.test($(this).find('span.email').text())){
            // console.log($(this).find('h3').text()+' '+$(this).find('span.email').text());
            filteredStudents.push($(this));
            // $(this).fadeIn();
        }else{
            // $(this).fadeOut();
        }
        // console.log(regex.test($(this).find('h3').text()) || regex.test($(this).find('span.email').text()));
        // console.log($(this).find('h3').text()+' '+$(this).find('span.email').text());
        
    });
    return filteredStudents;
}


// var pat2= new RegExp("(<li.*(</li>)$)");
/*
numberOfStudents=studentsList.children();
console.log(numberOfStudents.length);
// $.parseHTML($('.student-item')[0]).addClass('show');
var el = '<li class="student-item cf">'+
            '<div class="student-details">'+
                '<img class="avatar" src="https://randomuser.me/api/portraits/thumb/men/75.jpg">'+
                '<h3>aapo niskanen</h3>'+
                '<span class="email">aapo.niskanen@example.com</span>'+
            '</div>'+
            '<div class="joined-details">'+
                   '<span class="date">Joined 06/15/12</span>'+
           '</div>'+
        '</li>';
el+=el;
$.parseHTML(el).addClass('show');
// console.log( $.parseHTML(el) );
studentsList.empty();
var nav = '<div class="pagination">jjjj</div>';
studentsList.append(nav);

function buildPagination(){
    var pagination = '',
        numPage=computeNumOfPages;

}
*/
function computeNumOfPages(numElements, numElementsPerPage){
    return Math.ceil(numElements/numElementsPerPage);
}