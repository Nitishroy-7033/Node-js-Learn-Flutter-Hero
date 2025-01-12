class Todo{
    constructor(id,title,des)
    {
        this.id=id,
        this.title=title;
        this.des=des;
        this.createdAt = new Date();
    }
}
module.exports = Todo;