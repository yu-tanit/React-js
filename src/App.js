import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="custom-heading"> CITIES TO VISIT IN EUROPE</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">

        <Card
          imageSrc="https://img.freepik.com/free-photo/eiffel-tower-paris-with-gorgeous-colors-autumn_268835-828.jpg?w=2000"
          title="PARIS"
          subTitle="France"
          description="Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, culture, fashion, gastronomy and many areas."
        />
        <Card
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYx_e116BmE-bIVO483bfau2-r3ChqJ8CTeg&usqp=CAU"
          title="LONDON"
          subTitle="United Kingdom"
          description="When exploring London, you will come across lots of excitement by chance, so try to take everything in rather than just rushing around to all of the major tourist haunts."
        />
        <Card
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7DFTBYE6efrvpdee9p_fZ9kJ2sZRjhjDHaw&usqp=CAU"
          title="BARCELONA"
          subTitle="Spain"
          description="Overlooking the Mediterranean Sea, and famous for Gaudí and other Art Nouveau architecture, Barcelona is one of Europe's trendiest cities."
        />
        <Card
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56y7lYFiBINmStrzlhZcMmpP630hTWp77kg&usqp=CAU"
          title="PRAGUE"
          subTitle="Czech Republic"
          description="Old-world charm meets modern vibrancy in Europe's capital of stunning architecture, with the iconic Charles Bridge and a captivating cultural scene."
        />

      </div>
    </div>
  );
};

export default App;
