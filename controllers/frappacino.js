var Frappacino = require('../models/frappacino');


exports.frappacino_view_all_Page = async function(req, res) {
	try{
		theFrapps = await Frappacino.find();
		res.send(theFrapps);
		}
	catch(err){
		res.status(500);
		res.send(`{"error": ${err}}`);
	}
};

exports.frappacino_detail = async function(req, res) {
	console.log("detail" + req.params.id) 
	try {
		result = await Frappacino.findById(req.params.id);
		res.send(result);
	} catch(error) {
		res.status(500);
		res.send(`{"error":document for id ${req.params.id} not found`);
	}
};

exports.frappacino_create_post = async function(req,res) {
		console.log(req.body)
		let document = new Frappacino();
		// We are looking for a body, since POST does not have query parameters.
		// Even though bodies can be in many different formats, we will be picky
		// and require that it be a json object
		// {"costume_type":"goat", "cost":12, "size":"large"}
		document.costume_type = req.body.size;
		document.cost = req.body.brand;
		document.size = req.body.orderNum;
		try{
		let result = await document.save();
		res.send(result);
		}
		catch(err){
		res.status(500);
		res.send(`{"error": ${err}}`);	
		}
};

exports.frappacino_delete = async function(req, res) {
	console.log("delete " + req.params.id);
	try {
		result = await Frappacino.findByIdAndDelete(req.params.id);
		console.log("Removed " + result);
		res.send(result);
	} catch(err) {
		res.status(500);
		res.send('{"error": Error deleting ${err}}');
	}
};

exports.frappacino_update_put = async function(req, res) {
	console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
	try {
		let toUpdate = await Frappacino.findById(req.params.id);
		if(req.body.size) {toUpdate.size = req.body.size;}
		if(req.body.brand) {toUpdate.brand = req.body.brand;}
		if(req.body.orderNum) {toUpdate.orderNum = req.body.orderNum;}
		let result = await toUpdate.save();
		console.log("Success " + result);
		res.send(result);
	} catch (err) {
		res.status(500);
		res.send(`{"error":${err}: Update for id ${req.params.id} failed}`);
	}
};

exports.frappacino_view_one_Page = async function(req, res) {
	console.log("single view for id " + req.query.id)
	try{
		result = await Frappacino.findById(req.query.id)
		res.render('frappacinodetail', { title: 'Frappacino Detail', toShow: result });
	}
	catch(err){
		res.status(500);
		res.send(`{'error': '${err}'}`);
	}
};

exports.frappacino_create_Page = function(req, res) {
	console.log("frappacino view")
	try{
	res.render('frappacinocreate', { title: 'Frappacino Create'});
	}
	catch(err){
	res.status(500)
	res.send(`{'error': '${err}'}`);
	}
};

exports.frappacino_update_Page = async function(req, res) {
	console.log("update view for item "+req.query.id)
	try{
		let result = await Frappacino.findById(req.query.id);
		res.render('frappacinoupdate', { hello: 'Welcome to the update page of my collection!',
			title: 'Frappacino Update', 
			instructions: 'Below is the information listed for the id of the element you entered into the url! Change one or more of the values in each box and then click the update button!', toShow: result });
	}
	catch(err){
		res.status(500);
		res.send(`{'error': '${err}'}`);
	}
};

exports.frappacino_delete_Page = async function(req, res) {
	console.log("Delete view for id " + req.query.id)
	try{
		result = await Frappacino.findById(req.query.id);
		res.render('frappacinodelete', { title: 'Frappacino Delete', toShow: result });
	}
	catch(err){
		res.status(500);
		res.send(`{'error': '${err}'}`);
	}
};
