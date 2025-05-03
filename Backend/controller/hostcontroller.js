const Home = require("../models/file");

//--That is for Home page rendering
exports.gethome=(req,res,next)=>{
  console.log("Now you are on Add Page");
    res.render('Host/Edit-Home',{
      editing:false,
    });
  };
 
 exports.getedithome=(req,res,next)=>{
    const homeId = req.params.homeId;
    const editing = req.query.editing === 'true';
    Home.findById(homeId).then( house=>{
      if(!house){
        console.log("home not found");
       return  res.redirect("Host/Homedit");
      }
      console.log(homeId,editing,house);
      res.render('Host/Edit-Home', {
        house:house,
        editing:editing,});
    })
    }
//---Add-page
exports.addhome = (req,res,next)=>{
  const {housename,price,location,rating,imageUrl} = req.body;
  const newhome = new Home ({housename,price,location,rating,imageUrl});
  newhome.save().then(()=>{
    console.log("home saved")
  });
  res.redirect('Host/Homedit');
  /*  Home.find().then(registerhomes=>{
     res.render('Host/Homedit',{registerhomes:registerhomes});
    console.log(registerhomes);
  }); */
  }
  
   exports.Postedithome = (req,res,next)=>{
    const {id,housename,price,location,rating,imageUrl} = req.body;
    Home.findById(id).then(home=>{
      home.housename = housename;
      home.price = price;
      home.location = location;
      home.rating = rating;
      home.imageUrl = imageUrl;
      home.save().then((result)=>{
        console.log("home updated",result);
      }).catch((error)=>{
        console.log("error",error);
      })
    res.redirect("/home-edit");
    });
  }; 
exports.list=(req,res,next)=>{
   Home.find().then(registerhomes=>{
    res.render('Host/Homedit',{registerhomes:registerhomes});
    console.log(registerhomes);
 }); 
}
/* exports.deletehome = (req,res,next)=>{
  const homeId = req.params.homeId;
  console.log(homeId);
  Home.findByIdAndDelete(homeId,error=>{
    if(error){
      console.log("error",error);
    } 
     res.redirect("/home-edit");
  })

  } */