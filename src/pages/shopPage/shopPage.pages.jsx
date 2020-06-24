import React from "react";
import "./shopPage.styles.scss";
import SHOP_DATA from "../../shop_data";
import ShopItem from "../../components/shopItem/shopItem.component";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shopData: [] };
  }

  componentDidMount() {
    this.setState({ shopData: SHOP_DATA });
  }

  render() {
    const sData = this.state.shopData;
    return (
      <div className="shop-container">
        {sData.map((data) => (
          <div key={data.id} className="shop-category">
            <h1 className="shop-category-title">{data.title}</h1>
            <div className="shop-category-items">
              {data.items
                .filter((item, count) => count < 3)
                .map((it) => {
                  return (
                    <ShopItem
                      key={it.id}
                      name={it.name}
                      image={it.imageUrl}
                      price={it.price}
                    />
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Homepage;
