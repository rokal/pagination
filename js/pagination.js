var studentsList = $('.student-list'),
    pageSize = 10,
    numberOfStudents,
    filteredStudents;

filteredStudents = studentsList.children();

displayPage(1);

function hideAll(){
    studentsList.children().each(function(index){
        $(this).fadeOut();
    });
}


function filter(keyword){
    var regex= new RegExp(keyword,'i');
    var filtered = [];
    studentsList.children().each(function(index){
        if(regex.test($(this).find('h3').text()) || regex.test($(this).find('span.email').text())){
            filteredStudents.push($(this));
        }
    });
    return filtered;
}

function displayPage(page){
    var begin = ((page-1)*pageSize),
        end = Math.min(page*pageSize, filteredStudents.length)-1;
    filteredStudents.each(function(index) {
        if(index >= begin && index <= end){
            $(this).fadeIn();
        }else{
            $(this).fadeOut();
        }
    });

    displayPagination(page);
}

function displayPagination(activePage){
    $('.pagination').remove();
    var pages=computeNumOfPages(filteredStudents.length, pageSize);
    var nav = '<div class="pagination"><ul>';
    for(var i = 1; i <= pages; i++){
        nav += '<li><a href="#"';
        nav += activePage === i ? ' class="active">' : '>';
        nav += i + '</a></li>';
    }
    nav += '</ul></div>';
    $('.page').append(nav);
}

function computeNumOfPages(numElements, numElementsPerPage){
    return Math.ceil(numElements/numElementsPerPage);
}