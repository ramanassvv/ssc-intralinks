const video={
    title:'a',
    tags :['e','b','c'],
    showTags(){
        this.tags.forEach(function(tags){
            console.log(this.title,tags);
        },this);
    }
};
video.showTags();