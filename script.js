document.addEventListener('DOMContentLoaded', function () {
    // Function to hide all subtopics and content sections

    document.getElementById('FashionHistory').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'fashion-history.html';
    });
    document.getElementById('FashionTypes').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'fashion-types.html';
    });
    document.getElementById('FashionTerms').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'fashion-terms.html';
    });
    document.getElementById('FashionCultures').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'fashion-cultures.html';
    });
    document.getElementById('AnatomyOfFashion').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'Anatomy-of-fashion.html';
    });
    document.getElementById('ColorTheory').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'color-theory.html';
    });
    document.getElementById('StitchesAndKnitting').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'stitches.html';
    });
    document.getElementById('FashionSketch').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'fashion-sketch.html';
    });
    document.getElementById('PatternsAndTextures').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'patterns.html';
    });

    function hideAll() {
        document.querySelectorAll('.subtopics').forEach(subtopic => subtopic.style.display = 'none');
        document.querySelectorAll('.content-section').forEach(content => content.style.display = 'none');
    }

    // Event listener for main topics
    document.querySelectorAll('.main-topic').forEach(topic => {
        topic.addEventListener('click', function () {
            // Hide all subtopics and content sections
            hideAll();
            // Display the subtopics for the clicked main topic
            const subtopicsId = this.getAttribute('data-subtopics');
            document.getElementById(subtopicsId).style.display = 'block';
        });
    });

    // Event listener for subtopics
    document.querySelectorAll('.subtopic-item').forEach(subtopic => {
        subtopic.addEventListener('click', function () {
            // Hide all content sections
            hideAll();
            // Display the content for the clicked subtopic
            const contentId = this.getAttribute('data-content');
            document.getElementById(contentId).style.display = 'block';
        });
    });

    // Initialize by hiding all subtopics and content sections
    hideAll();
    document.addEventListener('DOMContentLoaded', function () {
    // Function to hide all subtopics and content sections

    document.getElementById('FashionHistory').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'fashion-history.html';
    });
    document.getElementById('FashionTypes').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'fashion-types.html';
    });
    document.getElementById('FashionTerms').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'fashion-terms.html';
    });
    document.getElementById('FashionCultures').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'fashion-cultures.html';
    });
    document.getElementById('AnatomyOfFashion').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'Anatomy-of-fashion.html';
    });
    document.getElementById('ColorTheory').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'color-theory.html';
    });
    document.getElementById('StitchesAndKnitting').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'stitches.html';
    });
    document.getElementById('FashionSketch').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'fashion-sketch.html';
    });
    document.getElementById('PatternsAndTextures').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'patterns.html';
    });

    function hideAll() {
        document.querySelectorAll('.subtopics').forEach(subtopic => subtopic.style.display = 'none');
        document.querySelectorAll('.content-section').forEach(content => content.style.display = 'none');
    }

    // Event listener for main topics
    document.querySelectorAll('.main-topic').forEach(topic => {
        topic.addEventListener('click', function () {
            // Hide all subtopics and content sections
            hideAll();
            // Display the subtopics for the clicked main topic
            const subtopicsId = this.getAttribute('data-subtopics');
            document.getElementById(subtopicsId).style.display = 'block';
        });
    });

    // Event listener for subtopics
    document.querySelectorAll('.subtopic-item').forEach(subtopic => {
        subtopic.addEventListener('click', function () {
            // Hide all content sections
            hideAll();
            // Display the content for the clicked subtopic
            const contentId = this.getAttribute('data-content');
            document.getElementById(contentId).style.display = 'block';
        });
    });

    // Initialize by hiding all subtopics and content sections
    hideAll();
});
});