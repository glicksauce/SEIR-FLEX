//$(() => {

    
        const generateSquares = (numberOfRows) => {
            for (let j=0;j<numberOfRows;j++){
                $newDiv = $("<div>")
                $newDiv.css("width","100%")
                $('body').append($newDiv);
                for (let i=0;i<8;i++){
                    const $square = $('<div>').addClass('square')
                    if (j%2 ==0){
                        if (i%2 ==0) {
                            $square.css("background-color","red");
                            $square.css("color","red");
                        }else {
                            $square.css("background-color","black");
                            $square.css("color","black");
                        }
                    } else {
                        if (i%2 ==0) {
                            $square.css("background-color","black");
                            $square.css("color","black");
                        }else {
                            $square.css("background-color","red");
                            $square.css("color","red");
                        }
                    }

                    $square.text(i);
                    $square.attr('id',`square${i}`)

                    $($newDiv).append($square);
                }
                

            }
        }
    

    const randColorRGB = () => {
        let red = Math.floor(Math.random()*256)
        let green = Math.floor(Math.random()*256)
        let blue = Math.floor(Math.random()*256)
        //console.log(red,green,blue)
        return `rgb(${red},${green},${blue})`;
    }

    $(() => {
        generateSquares(8);
        generateTriangles(16)
    });


    //pyramid
    const generateTriangles = (triangleRows) =>{
        let mWidth = 50;
        let overlapHeight = 25;
        for (let j=0;j<triangleRows;j++){
            $newDiv = $("<div>")
            $newDiv.addClass('triangleContainer')
            $newDiv.css("width", (j+1) * mWidth)
            $newDiv.css("top", (j+1) * overlapHeight*-1)
            //$newDiv.css("width","100%")
            $('body').append($newDiv);
            for (let i=0;i<=j;i++){
                    const $triangle = $('<div>').addClass('arrow-up')
                    $triangle.css("border-bottom-color","red");
                    $triangle.attr('id',`triangle${i}`)
                    $($newDiv).append($triangle);
            }
        }
    }



//})