class PaginationController {

    constructor(view, pageController) {
        let $ = document.querySelector.bind(document);

        this._view = view;
        this._pageController = pageController;
    }

    paginationActions() {
        this._nextButtonAction();
        this._previousButtonAction();
        this._activePageHighlight();
        this._pageButtonsAction();
    }

    _nextButtonAction() {
        this._nextButton = document.querySelector('#nextButton');
        if(this._nextButton != null) {
            this._nextButton.addEventListener('click', () => {
                if(this._view.activePage + 1 < this._view.numberOfPages) {
                    this._view.nextPage();
                    this._pageController.listar(this._view.activePage);
                }
             })
        } 
    }

    _activePageHighlight() {
        this._activePageButton = document.querySelector(`.page${this._view.activePage + 1}`);
        if(this._activePageButton != null) {
            this._activePageButton.classList.add('active');
        }
    }

    _pageButtonsAction() {
        this._pageButtons = document.querySelectorAll('.page-button');
        this._pageButtons.forEach(b => {
            b.addEventListener('click', () => {
                this._view.setPageNumber(b.textContent - 1);
                this._pageController.listar(this._view.activePage);
            })
        })
    }

    _previousButtonAction() {
        this._previousButton = document.querySelector('#previousButton');
        if(this._previousButton != null) {
            this._previousButton.addEventListener('click', () => {
                this._view.previousPage();
                this._pageController.listar(this._view.activePage);
            })
        }
    }
}