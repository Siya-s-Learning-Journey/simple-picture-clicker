/*  
===================================
=   Work by: Sponch The Inventor  =
=   Github: @dsponch              =
===================================
*/

var counter;


var model = {
    currentPicture: null,

    pictures: [

        {
            clickCount: 0,
            name: 'Picture 1',
            imgSrc: 'img/StockSnap_0V0R3MGRPP.jpg'
        },
        {
            clickCount: 0,
            name: 'Picture 2',
            imgSrc: 'img/StockSnap_0V0R3MGRPP.jpg'
        },
        {
            clickCount: 0,
            name: 'Picture 3',
            imgSrc: 'img/StockSnap_0V0R3MGRPP.jpg'
        },
        {
            clickCount: 0,
            name: 'Picture 4',
            imgSrc: 'img/StockSnap_0V0R3MGRPP.jpg'
        },
        {
            clickCount: 0,
            name: 'Picture 5',
            imgSrc: 'img/StockSnap_0V0R3MGRPP.jpg'
        },
        {
            clickCount: 0,
            name: 'Picture 6',
            imgSrc: 'img/StockSnap_0V0R3MGRPP.jpg'
        }
    ],
};

//  ============= View ========================

var controller = {

    init: function () {
        // set current picture to the first one.
        model.currentPicture = model.pictures[0];


        // initialize views
        pictureListView.init();
        pictureView.init();

    },

    getCurrentPictureModel: function () {
        return model.currentPicture;
    },

    getPictures: function () {
        return model.pictures;
    },


    // increments the counter for the currently selected image.
    incrementCounter: function () {
        model.currentPicture.clickCount++;
        // picture.re
    },

    setCurrentPicture: function (picture) {
        model.currentPicture = picture;
    }

};



// ====================== view ================================
var pictureView = {
    init: function () {
        // Store pointers to DOM element for easy access later.
        this.singlePicElem = document.getElementById('single-picture');
        this.pictureNameElem = document.getElementById('picture-name');
        this.pictureClickCounter = document.getElementById('click-counter');
        this.pictureImageElem = document.getElementById('current-image');


        // Store pointers to DOM element for easy access later.

        this.selectedPictureNameElem = document.getElementById('selected-picture-name');
        this.selectedPictureClickCounter = document.getElementById('selected-click-counter');
        this.selectedPictureImageElem = document.getElementById('selected-current-image');



        // on click increment the current counter.
        this.pictureImageElem.addEventListener('click', function () {
            controller.incrementCounter();
        });

        //  render view
        this.render();

    },


    renderSelected: function (currentPicture) {
        // update the DOM elements 

        this.selectedPictureClickCounter.textContent = currentPicture.clickCount;
        this.selectedPictureNameElem.textContent = currentPicture.name;
        this.selectedPictureImageElem.src = currentPicture.imgSrc;
    },

    render: function (currentPicture) {
        // update the DOM elements 
        this.pictureClickCounter.textContent = currentPicture.clickCount;
        this.pictureNameElem.textContent = currentPicture.name;
        this.pictureImageElem.src = currentPicture.imgSrc;
    }
};

// The list view

var pictureListView = {


    init: function () {
        //  Store dom pointer for access
        this.pictureListElem = document.getElementById('picture-container');

        // Render this view
        this.render(model.currentPicture);
    },

    render: function () {
        var singlePicture, i;


        // Get picture to render from controller
        var pictures = controller.getPictures();

        // Empty current list


        // Loop through pictures
        for (i = 0; i < pictures.length; i++) {

            // Current picture
            singlePicture = pictures[i];

            var divElemen = document.createElement('div');

            divElemen.innerHTML = '<h2 id="picture-name"></h2><h3>The cat has been clicked</h3><div id=\'click-counter\'>0</div><img id=\'current-image\' alt=\'\' src=\'' + singlePicture.imgSrc + '\'>';


            // on click set current pic and reder the view
            //  user closure-in-a-loop to acomplish.
            divElemen.addEventListener('click', (function (pictureCopy) {

                // inner function
                return function () {
                    controller.setCurrentPicture(pictureCopy);
                    pictureView.renderSelected(pictureCopy);
                };

            })(singlePicture));




            // finally add it to the list
            this.pictureListElem.appendChild(divElemen);
        }

    }



};

// Run the code
controller.init();
