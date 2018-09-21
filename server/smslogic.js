setInterval(()=>{
    router.get("/oneUser", function (req, res) {
        return User.find({alertOne: Date()})
            .then(doc => {
                return res.status(200).json({message: "User created",doc:doc});
            })
            .catch(err => {
                return res.status(500).json({message: "Cannot find user", err: err});
            })
          
      });
}, 6000*60*24)


setInterval(()=>{
    // router.get("/viewAllUsers", function (req, res) {
        return User.find({email: 'qw@qw'})
            .then(doc => {
                console.log("E don happen")
                console.log(doc[0].email)
                return (doc[0].email);
                // console.log(JSON.parse(doc).email);
                // return res.status(200).json({message: "User created",doc:doc});
            })
            .catch(err => {
                console.log("error")
                // return res.status(500).json({message: "Cannot find user", err: err});
            })
          
    //   });
}, 5000)




cron.schedule("* * 21 * *", function() {
  console.log("---------------------");
  console.log("Running Cron Job");
});

