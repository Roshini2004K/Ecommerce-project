import React, { useEffect, useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {

  const paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };

  const [updateProduct, setUpdateProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ GET PRODUCT BY ID
  useEffect(() => {
    axios
      .get(`https://json-server-backend-quaw.onrender.com/products/${id}`)
      .then((res) => setUpdateProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // ✅ HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("rating.")) {
      const fieldName = name.split("rating.")[1];

      setUpdateProduct({
        ...updateProduct,
        rating: {
          ...updateProduct.rating,
          [fieldName]: value,
        },
      });
    } else {
      setUpdateProduct({
        ...updateProduct,
        [name]: value,
      });
    }
  };

  // ✅ UPDATE (PUT)
  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`https://json-server-backend-quaw.onrender.com/products/${id}`, updateProduct)
      .then(() => {
        alert("Product Updated Successfully");
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  // ✅ LOADING
  if (updateProduct!==null) {
    return (
    <div>
      <Paper elevation={20} style={paperStyle}>
        <Typography variant="h5" textAlign="center">
          Update Product
        </Typography>

        <Grid
          component="form"
          style={{ display: "grid", gap: "20px" }}
          onSubmit={handleUpdate}
        >
          <TextField
            value={updateProduct.title}
            name="title"
            label="Title"
            fullWidth
            onChange={handleChange}
          />

          <TextField
            value={updateProduct.category}
            name="category"
            label="Category"
            fullWidth
            onChange={handleChange}
          />

          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                value={updateProduct.rating.rate}
                name="rating.rate"
                type="number"
                label="Rate"
                fullWidth
                onChange={handleChange}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                value={updateProduct.rating.category}
                name="rating.count"
                type="number"
                label="Count"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Button type="submit" variant="contained" color="success" fullWidth>
            Save
          </Button>
        </Grid>
      </Paper>
    </div>
  );
  }
  else{
    return <div>Loading...</div>;
  }
  
};

export default UpdateProduct;