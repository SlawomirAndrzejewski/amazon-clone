<template>
  <main style="margin-bottom: 20px">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Add a new product</h2>
            <form>
              <!-- Category dropdown -->
              <div class="a-spacing-top-medium">
                <label>Category</label>
                <select class="a-select-option">
                  <option
                    v-for="category in categories"
                    :key="category._id"
                    :value="category._id"
                    >{{ category.type }}</option
                  >
                </select>
              </div>
              <!-- Owner dropdown -->
              <div class="a-spacing-top-medium">
                <label>Owner</label>
                <select class="a-select-option">
                  <option
                    v-for="owner in owners"
                    :key="owner._id"
                    :value="owner._id"
                    >{{ owner.name }}</option
                  >
                </select>
              </div>
              <!-- Title input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Title</label>
                <input type="text" class="a-input-text" style="width: 100%" />
              </div>
              <!-- Price input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Price</label>
                <input type="number" class="a-input-text" style="width: 100%" />
              </div>
              <!-- Description input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Description</label>
                <textarea
                  placeholder="Provide details such as a product description"
                  style="width: 100%"
                ></textarea>
              </div>
              <!-- Photo input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Add photo</label>
                <div class="a-row a-spacing-top-medium">
                  <label class="choosefile-button">
                    <i class="fal fa-plus"></i>
                    <input type="file" />
                    <p style="margin-top: -70px">Name</p>
                  </label>
                </div>
              </div>
              <hr />
              <!-- Button -->
              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text">Add product</span>
                  </span>
                </span>
              </div>
              <div class="col-sm-3"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let categories = $axios.$get("http://localhost:2000/api/categories");
      let owners = $axios.$get("http://localhost:2000/api/owners");

      const [categoriesResponse, ownersResponse] = await Promise.all([
        categories,
        owners
      ]);

      return {
        categories: categoriesResponse.categories,
        owners: ownersResponse.owners
      };
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style></style>
