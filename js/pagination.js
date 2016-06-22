var studentsList = $('.student-list'),
    pageSize = 10,
    numberOfStudents,
    filteredStudents;

initListOfStudents();
init();

function init(){
    displaySearchBar();
    displayPage(filteredStudents,1);
    $('.student-search button').click(function(){
        search($('.student-search input').val());
    });

}

function initListOfStudents() {
    filteredStudents = $('li.student-item');
}

function search(keyWords){
    filteredStudents = filter(keyWords);
    displayPage(filteredStudents,1);
}


function hideAll(){
    $('li.student-item').hide();
}



function filter(params) {
    var regex= new RegExp(params,'i');
    return $('li.student-item')
        .filter(function(index){
            return regex.test($(this).find('h3').text()) || regex.test($(this).find('span.email').text());
        });
}

function displayPage(elements,page){
    var begin = ((page-1)*pageSize),
        end = Math.min(page*pageSize, elements.length)-1;
    hideAll();
    elements.each(function(index) {
        if(index >= begin && index <= end){
            $(this).slideDown(1000);
        }
    });

    displayPagination(page);
}

function displayPagination(activePage){
    $('.pagination').remove();
    var pages = computeNumOfPages(filteredStudents.length, pageSize);
    if(pages > 1){
        var nav = '<div class="pagination"><ul>';
        for(var i = 1; i <= pages; i++){
            nav += '<li><a href="#"';
            nav += activePage === i ? ' class="active">' : '>';
            nav += i + '</a></li>';
        }
        nav += '</ul></div>';
        $('.page').append(nav);

        $('.pagination li a').click(function () {
            displayPage(filteredStudents,parseInt($(this).text()));
        });
    }
}

function displaySearchBar(){
    var bar = '<div class="student-search">'+
                '<input placeholder="Search for students...">'+
                '<button>Search</button>'+
              '</div>';
    $('.page-header').append(bar);

}

function computeNumOfPages(numElements, numElementsPerPage){
    return Math.ceil(numElements/numElementsPerPage);
}
