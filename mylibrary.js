//to create own library file and declare it in the index.html file
function isTouching (o1, o2) {
    //to detect the collision between declared objects 
    if (o2.x-o1.x < o1.width/2+o2.width/2 && 
      o1.x-o2.x < o1.width/2+o2.width/2 &&
      o2.y-o1.y < o1.height/2+o2.height/2 &&
      o1.y-o2.y < o1.height/2+o2.height/2) 
      {
        //if the condition is true then return the statement - 
        return true;
      }
    
    //if the upper code is not working then remain the color green of the rectangles
    else {
    //-and if not then then do not change the color
     return false;
    }
    }