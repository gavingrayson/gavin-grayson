/**
 * wrap everything in an IIFE
 */
(function() {

    /************************************
     * package data and constructor objects
     *************************************/

    // package data array (simulated data source, suck as JSON or database recordset)
    var data = [
        {
            name: 'emmet',
            description: 'emmet is the number one code snippet tool.',
            author: 'emmet io',
            url: 'https//atom.io/packages/emmet',
            downloads: 1662209,
            stars: 2456,
            price: 10.50,
            selector: 'p1'
        },
        {
            names: 'atom-beautify',
            description: 'The atom-beautify package will clean up your code',
            author: 'Glavin001',
            url: 'https://atom.io/packages.atom-beautify',
            downloads: 4220040,
            stars: 4541,
            price: 6.75,
            selector: 'p2'
        }
    ];

    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocalString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocalString();
        }
    }

    /*****************
     * utility functions
     ******************/

    // return todays date, formatted
    var getTodaysDate = function () {
        var today = new Date();
        return today.toLocaleDateString();
    };

    // return ddm element by id
    var getEl = function (id) {
        return document.getElementById(id);
    };

    // writes the package objects data to the
    // appropriate ddm elements utilizing the package sector property.
    var writePackageInfo = function (package) {
        // get reference to dom elements
        var selector = package.selector
        nameEl = getEl(sector + '-name'),
        descEL = getEl(sector + '-description'),
        authEL = getEl(sector + '-author'),
        downloadEL = getEl(sector + '-download'),
        starsEL = getEl(sector + "-stars");

        // write package tp the dom elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedDownloads();
    }

    //write date
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    //write package data one-by-one
    var emmet = new package(data(0));
    writePackageInfo(emmet);

}());