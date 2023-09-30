const express = require("express");
// create new router
const router = express.Router();
// create a JSON data array
let data = [
  {
    id: 207,
    title: "Darshil",
    order: 1,
    completed: true,
    createdOn: new Date(),
  },
];
// this end-point of an API returns JSON data array
router.get("/", function (req, res) {
  res.status(200).json(data);
});

// this end-point returns an object from a data array find by id
// we get `id` from URL end-points
router.get("/:id", function (req, res) {
  // find an object from `data` array match by `id`
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  // if object found return an object else return 404 not-found
  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
});

router.post("/add", function (req, res) {
  let receivedID = req.body.id;
  let receivedTitle = req.body.title;
  let receivedOrder = req.body.order;
  let myobj = {
    id: receivedID,
    title: receivedTitle,
    order: receivedOrder,
    // " for pushing is push";
    // "for delete is delete";
    // "for update is put";
  };

  data.push(myobj);
  res.status(200).json(data);
});

router.delete("/delete/:id", function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {
    delete data[found.id];
  }
  res.status(200).send(data);
});

router.put("/update/:id/:title", function (req, res) {
  var receivedname = req.params.title;
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {
    found.title = receivedname;
  }
  res.status(200).send(data);
});

module.exports = router;
