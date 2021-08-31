const express = require('express');

const app = express();
const PORT = 5000;

var bodyParser     =        require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jobs = [
    {
      "id": "96c76de4-2558-42f9-84e9-f696c5dd1bdd",
      "company": "Bergstrom and Sons",
      "logo": "http://dummyimage.com/203x100.png/5fa2dd/ffffff",
      "link": "https://mozilla.org/eget/eros.jpg?nibh=quis&in=odio&lectus=consequat&pellentesque=varius&at=integer&nulla=ac&suspendisse=leo&potenti=pellentesque&cras=ultrices&in=mattis&purus=odio&eu=donec&magna=vitae&vulputate=nisi&luctus=nam&cum=ultrices",
      "date": "8/26/2021",
      "title": "Design Engineer",
      "type": 0
    },
    {
      "id": "60a080a3-998e-4b28-85a0-8ee2dfb106e5",
      "company": "Bartoletti, Heller and Volkman",
      "logo": "http://dummyimage.com/122x100.png/dddddd/000000",
      "link": "https://gov.uk/in/felis.json?ligula=nisl&sit=nunc&amet=nisl&eleifend=duis&pede=bibendum&libero=felis&quis=sed&orci=interdum&nullam=venenatis",
      "date": "8/11/2021",
      "title": "Chemical Engineer",
      "type": 1
    },
    {
      "id": "610c5b6e-8513-4eab-8405-6c255d1d3fe7",
      "company": "Effertz-White",
      "logo": "http://dummyimage.com/172x100.png/ff4444/ffffff",
      "link": "http://deviantart.com/congue/diam/id/ornare.aspx?non=sagittis&interdum=nam&in=congue&ante=risus&vestibulum=semper&ante=porta&ipsum=volutpat&primis=quam&in=pede&faucibus=lobortis&orci=ligula&luctus=sit&et=amet&ultrices=eleifend&posuere=pede&cubilia=libero&curae=quis&duis=orci&faucibus=nullam&accumsan=molestie&odio=nibh&curabitur=in&convallis=lectus&duis=pellentesque&consequat=at&dui=nulla&nec=suspendisse&nisi=potenti&volutpat=cras&eleifend=in&donec=purus&ut=eu&dolor=magna&morbi=vulputate&vel=luctus&lectus=cum&in=sociis&quam=natoque&fringilla=penatibus&rhoncus=et&mauris=magnis&enim=dis&leo=parturient&rhoncus=montes&sed=nascetur&vestibulum=ridiculus&sit=mus&amet=vivamus&cursus=vestibulum&id=sagittis&turpis=sapien&integer=cum&aliquet=sociis&massa=natoque&id=penatibus&lobortis=et&convallis=magnis&tortor=dis&risus=parturient&dapibus=montes&augue=nascetur&vel=ridiculus&accumsan=mus&tellus=etiam&nisi=vel&eu=augue",
      "date": "8/29/2021",
      "title": "Safety Technician I",
      "type": 0
    },
    {
      "id": "34e1e14a-a46b-43c4-99b5-ac9303ca7d88",
      "company": "Heller-Olson",
      "logo": "http://dummyimage.com/127x100.png/5fa2dd/ffffff",
      "link": "http://time.com/pede.jsp?mauris=congue&lacinia=eget&sapien=semper&quis=rutrum&libero=nulla&nullam=nunc&sit=purus&amet=phasellus&turpis=in&elementum=felis&ligula=donec&vehicula=semper&consequat=sapien&morbi=a&a=libero&ipsum=nam&integer=dui&a=proin&nibh=leo&in=odio&quis=porttitor&justo=id&maecenas=consequat&rhoncus=in&aliquam=consequat&lacus=ut&morbi=nulla&quis=sed&tortor=accumsan&id=felis&nulla=ut&ultrices=at&aliquet=dolor&maecenas=quis&leo=odio&odio=consequat&condimentum=varius&id=integer&luctus=ac&nec=leo&molestie=pellentesque&sed=ultrices&justo=mattis&pellentesque=odio&viverra=donec&pede=vitae&ac=nisi&diam=nam&cras=ultrices&pellentesque=libero&volutpat=non&dui=mattis",
      "date": "8/24/2021",
      "title": "Tax Accountant",
      "type": 0
    },
    {
      "id": "375a8271-f08f-49bc-a5f8-3d9ced04c9f7",
      "company": "Wiegand Inc",
      "logo": "http://dummyimage.com/184x100.png/cc0000/ffffff",
      "link": "https://cnn.com/integer/non/velit/donec/diam/neque/vestibulum.xml?nisl=molestie&duis=hendrerit&bibendum=at&felis=vulputate&sed=vitae&interdum=nisl&venenatis=aenean&turpis=lectus&enim=pellentesque&blandit=eget&mi=nunc&in=donec&porttitor=quis&pede=orci&justo=eget&eu=orci&massa=vehicula&donec=condimentum&dapibus=curabitur&duis=in&at=libero&velit=ut&eu=massa&est=volutpat&congue=convallis&elementum=morbi&in=odio&hac=odio&habitasse=elementum&platea=eu&dictumst=interdum&morbi=eu&vestibulum=tincidunt&velit=in&id=leo&pretium=maecenas&iaculis=pulvinar&diam=lobortis&erat=est&fermentum=phasellus&justo=sit&nec=amet&condimentum=erat&neque=nulla&sapien=tempus&placerat=vivamus&ante=in&nulla=felis&justo=eu&aliquam=sapien&quis=cursus&turpis=vestibulum&eget=proin&elit=eu&sodales=mi&scelerisque=nulla&mauris=ac&sit=enim&amet=in&eros=tempor&suspendisse=turpis&accumsan=nec&tortor=euismod&quis=scelerisque&turpis=quam&sed=turpis&ante=adipiscing&vivamus=lorem&tortor=vitae&duis=mattis&mattis=nibh&egestas=ligula&metus=nec&aenean=sem&fermentum=duis&donec=aliquam&ut=convallis",
      "date": "8/12/2021",
      "title": "Administrative Officer",
      "type": 1
    },
    {
      "id": "d3d715e9-7419-4dbe-89d8-5eb44e5da388",
      "company": "Veum, Kling and Bogan",
      "logo": "http://dummyimage.com/244x100.png/cc0000/ffffff",
      "link": "http://123-reg.co.uk/eu/nibh/quisque/id/justo.html?consequat=mauris&nulla=vulputate&nisl=elementum&nunc=nullam&nisl=varius&duis=nulla&bibendum=facilisi&felis=cras&sed=non&interdum=velit&venenatis=nec&turpis=nisi&enim=vulputate&blandit=nonummy&mi=maecenas&in=tincidunt&porttitor=lacus&pede=at&justo=velit&eu=vivamus&massa=vel&donec=nulla&dapibus=eget&duis=eros&at=elementum&velit=pellentesque&eu=quisque&est=porta&congue=volutpat&elementum=erat&in=quisque&hac=erat&habitasse=eros&platea=viverra&dictumst=eget&morbi=congue&vestibulum=eget&velit=semper&id=rutrum&pretium=nulla&iaculis=nunc&diam=purus&erat=phasellus&fermentum=in&justo=felis&nec=donec&condimentum=semper&neque=sapien&sapien=a&placerat=libero&ante=nam&nulla=dui&justo=proin&aliquam=leo&quis=odio",
      "date": "8/14/2021",
      "title": "Account Representative IV",
      "type": 0
    },
    {
      "id": "0c277cd0-7e23-462a-99ea-db8a778720a9",
      "company": "Goodwin-Herman",
      "logo": "http://dummyimage.com/114x100.png/cc0000/ffffff",
      "link": "http://blogger.com/tellus/nulla/ut.html?magna=ultrices&vulputate=posuere&luctus=cubilia&cum=curae&sociis=nulla&natoque=dapibus&penatibus=dolor&et=vel&magnis=est&dis=donec&parturient=odio&montes=justo&nascetur=sollicitudin&ridiculus=ut&mus=suscipit&vivamus=a&vestibulum=feugiat&sagittis=et&sapien=eros&cum=vestibulum&sociis=ac&natoque=est&penatibus=lacinia&et=nisi&magnis=venenatis&dis=tristique",
      "date": "8/19/2021",
      "title": "Legal Assistant",
      "type": 1
    },
    {
      "id": "d04525b8-ded9-448c-b93e-8a01d24d2786",
      "company": "Little Group",
      "logo": "http://dummyimage.com/106x100.png/5fa2dd/ffffff",
      "link": "http://youtu.be/duis/ac/nibh/fusce/lacus/purus/aliquet.png?luctus=primis&ultricies=in&eu=faucibus&nibh=orci&quisque=luctus&id=et&justo=ultrices&sit=posuere&amet=cubilia&sapien=curae&dignissim=nulla&vestibulum=dapibus&vestibulum=dolor&ante=vel&ipsum=est&primis=donec&in=odio&faucibus=justo&orci=sollicitudin&luctus=ut&et=suscipit&ultrices=a&posuere=feugiat&cubilia=et&curae=eros&nulla=vestibulum&dapibus=ac&dolor=est&vel=lacinia&est=nisi&donec=venenatis&odio=tristique&justo=fusce&sollicitudin=congue&ut=diam&suscipit=id&a=ornare&feugiat=imperdiet&et=sapien&eros=urna&vestibulum=pretium&ac=nisl&est=ut&lacinia=volutpat&nisi=sapien&venenatis=arcu&tristique=sed&fusce=augue&congue=aliquam&diam=erat&id=volutpat&ornare=in&imperdiet=congue&sapien=etiam&urna=justo&pretium=etiam&nisl=pretium&ut=iaculis&volutpat=justo&sapien=in&arcu=hac&sed=habitasse&augue=platea&aliquam=dictumst&erat=etiam&volutpat=faucibus&in=cursus&congue=urna&etiam=ut&justo=tellus&etiam=nulla&pretium=ut&iaculis=erat&justo=id&in=mauris&hac=vulputate&habitasse=elementum&platea=nullam&dictumst=varius&etiam=nulla&faucibus=facilisi&cursus=cras&urna=non&ut=velit&tellus=nec&nulla=nisi&ut=vulputate&erat=nonummy&id=maecenas&mauris=tincidunt&vulputate=lacus&elementum=at&nullam=velit&varius=vivamus",
      "date": "8/30/2021",
      "title": "Payment Adjustment Coordinator",
      "type": 0
    },
    {
      "id": "79416d62-2cf4-4c70-9010-3f66ffdd134d",
      "company": "Runolfsdottir LLC",
      "logo": "http://dummyimage.com/236x100.png/cc0000/ffffff",
      "link": "https://amazon.co.uk/eu/nibh/quisque/id/justo/sit/amet.xml?ridiculus=ridiculus&mus=mus&etiam=vivamus&vel=vestibulum&augue=sagittis&vestibulum=sapien&rutrum=cum&rutrum=sociis&neque=natoque&aenean=penatibus&auctor=et&gravida=magnis&sem=dis&praesent=parturient&id=montes&massa=nascetur&id=ridiculus&nisl=mus&venenatis=etiam&lacinia=vel&aenean=augue&sit=vestibulum&amet=rutrum",
      "date": "8/16/2021",
      "title": "Automation Specialist III",
      "type": 0
    },
    {
      "id": "259c4f36-f41d-4548-bbb1-fd1ba6db1137",
      "company": "Lueilwitz, Purdy and Marks",
      "logo": "http://dummyimage.com/153x100.png/dddddd/000000",
      "link": "http://yahoo.co.jp/eu/mi/nulla/ac/enim/in.jsp?lectus=duis&pellentesque=bibendum&eget=felis&nunc=sed&donec=interdum&quis=venenatis&orci=turpis&eget=enim&orci=blandit&vehicula=mi&condimentum=in&curabitur=porttitor&in=pede&libero=justo&ut=eu&massa=massa&volutpat=donec&convallis=dapibus&morbi=duis&odio=at&odio=velit&elementum=eu&eu=est&interdum=congue&eu=elementum&tincidunt=in&in=hac&leo=habitasse&maecenas=platea&pulvinar=dictumst&lobortis=morbi&est=vestibulum&phasellus=velit&sit=id&amet=pretium&erat=iaculis&nulla=diam&tempus=erat&vivamus=fermentum&in=justo&felis=nec&eu=condimentum&sapien=neque&cursus=sapien&vestibulum=placerat&proin=ante&eu=nulla&mi=justo",
      "date": "8/14/2021",
      "title": "Media Manager IV",
      "type": 0
    }
  ]

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

// API Homepage
app.get('/', (req, res) => {
    res.send('Hi user, I am serving for API server')
})

// Get jobs
app.get('/apicenter/jobs', (req, res) => {
    res.json(jobs);
})

// Get job-detail
app.get('/apicenter/jobs/detail/:jobId', (req, res) => {
    // check the ID
    let detail;

    if( !jobs.map(item=>item.id).includes(req.params.jobId) ){
        res.json({
            "success": false,
            "message": "Error: Invalid job ID!"
        });
    }else{
        for (let job of jobs) {
            if(job['id'] == req.params.jobId) {
                detail = job;
                break;
            }
        }
        res.json({
            "success": true,
            "message": "Get job detail successfully",
            "data": detail
        });
    }
})

// Add job
app.post('/apicenter/jobs/add', (req, res) => {
    // check duplicate company
    if( jobs.map(item=>item.title).includes(req.body.title) ){
        res.json({
            "success": false,
            "message": "Error: Duplicate job title!"
        });
    }else{
        jobs.push({
            ...req.body,
            id: 'job-id-'+Date.now() // change to more pro ID 
        });
        res.json({
            "success": true,
            "message": "Add job successfully"
        });
    }
})

// Edit job
app.put('/apicenter/jobs/edit/:jobId', (req, res) => {
  // check the ID
  if( !jobs.map(item=>item.id).includes(req.params.jobId) ){
    res.json({
        "success": false,
        "message": "Error: Invalid job ID!"
    });
  }else{
      for (let job of jobs) {
          if(job['id'] == req.params.jobId) {
              let body = req.body;
              job['company'] = body['company'];
              job['title'] = body['title'];
              job['logo'] = body['logo'];
              job['link'] = body['link'];
              job['date'] = body['date'];
              job['type'] = body['type'];
              break;
          }
      }
      console.log(jobs);
      res.json({
          "success": true,
          "message": "Edit job successfully"
      });
  }
})

// DELETE METHODS
app.delete('/apicenter/jobs/delete/:jobId', (req, res) => {

    // check the ID
    if( !jobs.map(item=>item.id).includes(req.params.jobId) ){
        res.json({
            "success": false,
            "message": "Error: Invalid job ID!"
        });
    }else{
        for (let job of jobs) {
            if(job['id'] == req.params.jobId) {
                let deleteIndex = jobs.indexOf(job);
                jobs.splice(deleteIndex, 1);
                break;
            }
        }
        res.json({
            "success": true,
            "message": "Delete job successfully"
        });
    }
})


// =====================================
// =====================================
app.listen(PORT, ()=> {
    console.log(`Server has started at port ${PORT}`);
})