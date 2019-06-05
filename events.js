AFRAME.registerComponent('markerhandler', {

    init: function() {
        const testMarker = document.querySelector("#test-marker");
        const testBox = document.querySelector("#test-box");

        // every click, we make our model grow in size :)
        testMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (testBox && intersectedElement === testBox) {
                const scale = testBox.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                testBox.setAttribute('scale', scale);
            }
        });
}});