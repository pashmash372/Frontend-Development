import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../Store/categories";

function Categories() {
  const cat = useSelector((state) => state.categories);
  console.log(cat);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  if (cat.isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {cat.categories.map((category,index) => (
          <li key={index}> {category}</li>
        ))}
      </ul>
    );
  }
}

export default Categories;
