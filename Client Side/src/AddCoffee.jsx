const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photourl = form.photourl.value;
    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photourl,
    };
    console.log(newCoffee);
  };
  return (
    <div>
      <h2>Add A Coffee</h2>
      <div>
        <form onSubmit={handleAddCoffee} className="mx-auto text-center">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border-2 outline-none px-4 py-2 my-1"
          ></input>
          <br />
          <input
            type="text"
            name="chef"
            placeholder="chef"
            className="border-2 outline-none px-4 py-2 my-1"
          ></input>
          <br />
          <input
            type="text"
            name="supplier"
            placeholder="Supplier"
            className="border-2 outline-none px-4 py-2 my-1"
          ></input>
          <br />
          <input
            type="text"
            name="taste"
            placeholder="Taste"
            className="border-2 outline-none px-4 py-2 my-1"
          ></input>
          <br />
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="border-2 outline-none px-4 py-2 my-1"
          ></input>
          <br />
          <input
            type="text"
            name="details"
            placeholder="Details"
            className="border-2 outline-none px-4 py-2 my-1"
          ></input>
          <br />
          <input
            type="text"
            name="photourl"
            placeholder="PhotoURl"
            className="border-2 outline-none px-4 py-2 my-1"
          ></input>
          <br />
          <input
            type="submit"
            className="btn btn-info text-white"
            value="Add Now"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
