class Size {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class Image {
    
    constructor(url, size) {
        this.url = url;
        this.size = size
    }

    getUrl() {
        return this.url;
    }

    setUrl(url){
        this.url = url;
    }

    setSize(width, height) {
        this.size.width = width;
        this.size.height = height;
    }

    getSize() {
        return this.size;
    }

    cloneImage() {
        return new Image(this.url, this.size)
    }

}

const image = new Image('hackerrank.com/image1', new Size(100, 100));
image.setSize(200, 300);
console.log(image.getSize())