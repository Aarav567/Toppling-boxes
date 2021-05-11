class Log{
    constructor(x,y,w,h){
        var options={
            density:4
        }
        

        this.x=x
        this.y=y
        this.width=w
        this.height=h


        this.body=Bodies.rectangle(x,y,w,h,options)

        World.add(world, this.body)

    }

    display(){
        var logpos=this.body.position



        fill ("brown")
        rectMode(CENTER)
        rect(logpos.x,logpos.y,this.width,this.height)


    }




}