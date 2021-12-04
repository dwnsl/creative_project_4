<template>
<div class="editShoes">
    <div class="heading">
      <h2>Add Shoes (Make sure to put the name of the shoe)</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="title" placeholder="Title">
        <p></p>
        <input type="file" name="photo" @change="fileChanged">
        <button @click="upload">ADD SHOE</button>
      </div>
      <div class="upload" v-if="addItem">
        <h2>The shoe has been upload</h2>
      </div>
    </div>
</div>
</template>


<style scoped>
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}
</style>


<script>
import axios from 'axios';
export default {
  name: 'Admin',
   data() {
    return {
      title: "",
      file: null,
      addItem: null,
    }
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/items', {
          title: this.title,
          path: r1.data.path
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>