
let vm = new Vue({
    el: '#app', 
    data: {
        plans: [
            { type: 'Basic', price: 299, features: [true, true, false, false, false] },
            { type: 'Standard', price: 499, features: [true, true, true, true, false] },
            { type: 'Premium', price: 899, features: [true, true, true, true, true] }
        ],
        COLOR: 'rgb(200, 70, 70)', //#0d6efd
        dark: true,
        sideBarDispaly: 'none',
        settingsDispaly: 'block',
        SHADOW: 'gray'//#0b4191
    },
    mounted() {
        this.updateColors(this.COLOR);

        document.addEventListener('click', this.handleClickOutside);
    },
    methods: {
        afficherSideBar() {
            setTimeout(() => {
                this.sideBarDispaly = 'block';
                this.settingsDispaly = 'none';
            }, 400);
        },
        afficherSettings() {
            setTimeout(() => {
                this.sideBarDispaly = 'none';
                this.settingsDispaly = 'block';
            }, 400);
        },
        handleClickOutside(event) {
            // Close sidebar if clicked outside
            const sidebar = this.$el.querySelector('.sidebar');
            if (sidebar && !sidebar.contains(event.target)) {
                // Only trigger if sidebar is currently visible
                if (this.sideBarDispaly === 'block') {
                    this.afficherSettings();
                }
            }
        },
        updateColors(hex) {
            //hex : the COLOR has a string value in hexadecimal
            //converting hexadecimal into rgb(decimal values)
            var red = parseInt(hex[1] + hex[2], 16);
            var green = parseInt(hex[3] + hex[4], 16);
            var blue = parseInt(hex[5] + hex[6], 16);
            //choosing background color for the body using COLOR
            let redB = red + 150;
            let greenB = green + 150;
            let blueB = blue + 150;
            let redS = red + 80;
            let greenS = green +80;
            let blueS = blue + 80;
            let redShadow = red - 80;
            let greenShadow = green - 80;
            let blueShadow = blue - 80;
            let bodyColor = 'rgb(' + redB + ',' + greenB + ',' + blueB + ')';
            let sidebarColor = 'rgb(' + redS + ',' + greenS + ',' + blueS + ')';
            this.SHADOW = 'rgb(' + redShadow + ',' + greenShadow + ',' + blueShadow + ')';
            document.body.style.backgroundColor = bodyColor;
            document.querySelector('div.sidebar').style.backgroundColor = sidebarColor;
    }
    },
    watch: {
        COLOR(newValue) {
            this.updateColors(newValue);
        }    
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
    },
});
