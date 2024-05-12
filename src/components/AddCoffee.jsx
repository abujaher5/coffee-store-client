import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.coffeeName.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(newCoffee);

    //send data

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Go Back",
          });
        }
      });
  };
  return (
    <div className="max-w-screen-lg mx-auto">
      <form onSubmit={handleAddCoffee}>
        <div className="md:grid grid-cols-2 gap-6 bg-[#F4F3F0] rounded-xl p-16 ">
          <div className="form-control">
            <label className="label">Coffee Name</label>
            <input
              type="text"
              name="coffeeName"
              placeholder="Coffee Name"
              className="input input-bordered "
            />
          </div>

          <div className="form-control">
            <label className="label">Chef</label>
            <input
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label">Supplier</label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Taste</label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Category</label>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Details</label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="input input-bordered w-full "
            />
          </div>

          <div className="col-span-2">
            <div className="form-control">
              <label className="label"> Photo</label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-bordered w-full "
              />
            </div>

            <input
              className="w-full bg-[#D2B48C] mt-5 rounded-lg p-2 "
              type="submit"
              value="Add Coffee"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
