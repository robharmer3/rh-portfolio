import { useNavigate } from "react-router";

function ProjectFilter({ categories }) {
  const navigate = useNavigate();
  function handleFilter(event) {
    event.preventDefault();
    console.log(event.target.value);
    navigate(`/projects?category=${event.target.value}`);
  }
  return (
    <form>
      <label htmlFor="default">Filter by Category: </label>
      <select onChange={handleFilter} name="category-filter" id="filter">
        <option key="all" value="">
          --Please Select--
        </option>
        {categories.map((category) => {
          return (
            <option
              key={category.category_id}
              type="radio"
              name="article-filter"
              id={category.category_id}
              value={category.title}
            >
              {category.title}
            </option>
          );
        })}
      </select>
    </form>
  );
}

export default ProjectFilter;
