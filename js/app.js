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
}

//  ============= View ========================

var controller = {

    init: function () {
        // set current picture to the first one.
        // model.currentPicture = model.pictures[0];


        // initialize views

    },

    getCurrentPictureModel: function () {
        return model.currentPicture;
    },


    // increments the counter for the currently selected image.
    incrementCounter: function () {
        model.currentPicture.clickCount++;
        // picture.re
    }

}



// ====================== view ================================
var pictureView = {
    init: function () {
        // Store pointers to DOM element for easy access later.
        this.singlePicElem = document.getElementById('single-picture');
        this.pictureNameElem = document.getElementById('picture-name');
        this.pictureClickCounter = document.getElementById('click-counter');
        this.pictureImageElem = document.getElementById('current-image');

        // on click increment the current counter.
        this.pictureImageElem.addEventListener('click', function () {
            controller.incrementCounter();
        });

        //  render view
        this.render();

    },

    render: function () {
        // update the DOM elements 
        var currentPicture = controller.getCurrentPictureModel();
        this.pictureClickCounter.textContent = currentPicture.clickCount;
        this.pictureNameElem.textContent = currentPicture.name;
        this.pictureImageElem.src = currentPicture.imgSrc;
    }
}

// The list view

var pictureListView = {


    init: function () {
        //  Store dom pointer for access
        this.pictureListElem = document.getElementById('single-picture');

        // Render this view
        this.render();
    },

    render: function () {
        var singlePicture, element, i;

        // Get picture to render from controller
    }



}

// ======== Old Code========
for (let i = 1; i <= document.getElementsByClassName('grid-container1').length; i++) {
    let catNameElement = document.getElementById('cat-image' + i);
    let counterElement = document.getElementById('no-clicked' + i);
    catNameElement.innerHTML = "picture : clicked"
    catNameElement.addEventListener('click', function (numCopy) {

        return function () {
            counterElement.innerHTML = counter++;
            console.log("Cat clicked")
            alert(numCopy)
        }
    });
}
for (let i = 1; i <= document.getElementsByClassName('grid-container2').length; i++) {
    let catNameElement = document.getElementById('cat-image' + i);

    catNameElement.addEventListener('click', function (numCopy) {

        return function () {
            console.log("Cat clicked")
            alert(numCopy)
            alert("car clicked")
        }
    }(i));
}
