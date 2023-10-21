Code review ciomments:
Code is well written , it's difficult to find the code review comments.
1.Readability issue in books-data-access.module.spec.ts on line number four.
    it should be BooksDataAccessModule rather than ShopDataAccessModule
2.In model-factories.ts pulished dateis static.It is recomended to fetch it dynamically.
3.It could be good  practice to use constants or variables for endpoint paths to prevent typos and facilitate maintenance. 
4.We can use the const READING_LIST_PATH = '/reading-list/'  in the ReadingListController.
5.Few instances lack proper subscription cleanup in ngOnInit, which may lead to potential memory leaks.
6.we can add the CSS to the "Reading List" button.
7.We can apply the CSS to the Reading list items and background color can be added to books ,for better readility of the content.
 
