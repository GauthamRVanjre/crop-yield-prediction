import React from 'react'

const index = () => {
  return (
    <form>
  <div class="form-group row">
    <label for="stateName" class="col-sm-2 col-form-label">State Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="stateName" placeholder='Karnataka'></input>
    </div>
  </div>
  <div class="form-group row">
    <label for="districtName" class="col-sm-2 col-form-label">District Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="districtName" placeholder="Bangalore"></input>
    </div>
  </div>
  <div class="form-group row">
    <label for="cropYear" class="col-sm-2 col-form-label">Crop Year</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="cropYear" placeholder="2018"></input>
    </div>
  </div>
  <div class="form-group row">
    <label for="season" class="col-sm-2 col-form-label">Season</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="season" placeholder="Summer"></input>
    </div>
  </div>
  <div class="form-group row">
    <label for="area" class="col-sm-2 col-form-label">Area</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="area" placeholder="1562"></input>
    </div>
  </div>
  <div class="form-group row">
    <label for="cropName" class="col-sm-2 col-form-label">Crop Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="cropName" placeholder="Ragi"></input>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
  )
}

export default index