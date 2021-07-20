import React from "react";

const textMapping = {
  continents: `<p>What actually is a continent, and how many are there?</p>
  <h2>What does the dictionary say?</h2>
  <p>
    Continent, noun, [ˈkɒn.tɪ.nənt] one of the seven large landmasses on the
    Earth's surface, surrounded, or mainly surrounded, by sea and usually
    consisting of various countries.
  </p>
  <h2>The Continents</h2>
  <p>
    Africa, the Americas, Antarctica, Asia, Australia, together with Oceania,
    and Europe are considered to be continents.
  </p>
  <p>
    The word continent is used to differentiate between various large land
    areas of Earth into which all the land surface of the planet is divided.
    The term refers to the 'mountain top' regions of the Earth not flooded by
    water, dry land. The level of the surrounding water ultimately defines the
    shape and borders of continents. More water implies less land and
    different outlines. Even more water, like that stored away as ice in the
    poles and glaciers, and you might live on a water planet, no continents.
  </p>
  <p>
    All right, then, a continent is "a large, continuous area of land on
    Earth." All continents of the Earth together make up about one-third of
    the total surface of the planet. The fact is, more than two-thirds of the
    Earth's surface is covered by water. The landmasses of the Earth are
    unequally distributed, two-thirds of the continental landmass is located
    in the Northern Hemisphere (the upper half of the globe, north of the
    equator). Why is that? This might be just a feature of our current point
    in geological time because some million years ago, the bulk of the
    planet's landmass was in the Southern Hemisphere.
  </p>`,
  countries: `<h2>Countries by Continents</h2>
  <h3>Asia</h3>
  <p>Includes 50 countries, and it is the most populated continent, the 60% of the total population of the Earth live
      here.</p>
  <h3>Africa</h3>
  <p>Comprises 54 countries. It is the hottest continent and home of the world's largest desert, the Sahara, occupying the
      25% of the total area of Africa.</p>
  <h3>North America</h3>
  <p>Includes 23 countries led by the USA as the largest economy in the world.</p>
  <h3>South America</h3>
  <p>Comprises 12 countries. Here is located the largest forest, the Amazon rainforest, which covers 30% of the South America total area.</p>
  <h3>Europe</h3>
  <p>Includes 51 countries, and it is the second most populated continent, the second largest after Asia.</p>
  <h3>Australia</h3>
  <p>Includes 14 countries. It is the least populated continent after Antarctica, only 0.2% of the total Earth population live here.</p>
  <h3>Antarctica</h3>
  <p>Is the coldest continent in the world, completely covered with ice. There are no permanent inhabitants, except of scientists maintaining research stations in Antarctica.</p>`,
  cities: `<h2>The global geography of world cities</h2>
  <p>What are termed ‘world’ cities or ‘global’ cities command and control the world economy, and are centres for
      transnational corporations (TNCs). They are mostly among the world’s wealthy cities; if not, they are at least among
      the wealthiest in their nation.</p>
  <p>Global cities play a key role in the world economy – but the playing field is increasingly unequal. Most cities are
      not able to engage seriously in global or regional contests for corporate headquarters. Some may be able to attract
      investment in production, especially where wages are very low. But being far from major trunk transport,
      communications and other infrastructure prevent them from genuinely competing. </p>
  <p>There are many lists that rank cities by indicators – such as gross domestic product (GDP), GDP per capita or housing
      affordability. Cities are also ranked using composite indicators measuring, for instance, business environment or
      quality of life (or subsets of this). Some lists relate more directly to ‘global’ or ‘world’ city economies.</p>
  <p>Here, we look at four of these lists – cities ranked by:</p>
  <ul>
      <li>Their concentration of advanced producer services (accountancy, advertising, banking/finance, law)</li>
      <li>Their number of TNC headquarters and their size and economic performance</li>
      <li>Scores on global financial services, and</li>
      <li>A composite indicator including scores on business activity, human capital, information exchange, cultural
          experience and political engagement.</li>
  </ul>
  <p>The table below presents lists of the top 20 cities, ranked under these categories.</p>
  <table>
      <thead style="font-weight: bold;">
          <tr>
              <th>Rank</th>
              <th>Advanced producer services</th>
              <th>TNC headquarters</th>
              <th>Global financial services</th>
              <th>Global cities</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>1</td>
              <td>New York<i>&nbsp;</i></td>
              <td>Beijing</td>
              <td>New York</td>
              <td>New York</td>
          </tr>
          <tr>
              <td>2</td>
              <td>London</td>
              <td>New York</td>
              <td>London</td>
              <td>London</td>
          </tr>
          <tr>
              <td>3</td>
              <td>Paris</td>
              <td>Tokyo</td>
              <td>Hong Kong</td>
              <td>Tokyo</td>
          </tr>
          <tr>
              <td>4</td>
              <td>Hong Kong</td>
              <td>London</td>
              <td>Singapore<i>&nbsp;</i></td>
              <td>Paris</td>
          </tr>
          <tr>
              <td>5</td>
              <td>Tokyo</td>
              <td>Paris</td>
              <td>Shanghai</td>
              <td>Hong Kong<i>&nbsp;</i></td>
          </tr>
          <tr>
              <td>6</td>
              <td>Los Angeles</td>
              <td>San Jose</td>
              <td>Tokyo</td>
              <td>Chicago</td>
          </tr>
          <tr>
              <td>7</td>
              <td>Singapore</td>
              <td>San Francisco<i>&nbsp;</i></td>
              <td>Beijing<i>&nbsp;</i></td>
              <td>Los Angeles<i>&nbsp;</i></td>
          </tr>
          <tr>
              <td>8</td>
              <td>Frankfurt</td>
              <td>Seoul<i>&nbsp;</i></td>
              <td>Dubai</td>
              <td>Singapore</td>
          </tr>
          <tr>
              <td>9</td>
              <td>Milan</td>
              <td>Hong Kong<i>&nbsp;</i></td>
              <td>Shenzhen<i>&nbsp;</i></td>
              <td>Sydney</td>
          </tr>
          <tr>
              <td>10</td>
              <td>Sydney</td>
              <td>Washington, DC</td>
              <td>Sydney<i>&nbsp;</i></td>
              <td>Seoul</td>
          </tr>
          <tr>
              <td>11</td>
              <td>Brussels</td>
              <td>Toronto</td>
              <td>Toronto</td>
              <td>Brussels</td>
          </tr>
          <tr>
              <td>12</td>
              <td>San Francisco</td>
              <td>Dallas</td>
              <td>San Francisco</td>
              <td>San Francisco<i>&nbsp;</i></td>
          </tr>
          <tr>
              <td>13</td>
              <td>Washington, DC</td>
              <td>Chicago</td>
              <td>Los Angeles</td>
              <td>Washington DC</td>
          </tr>
          <tr>
              <td>14</td>
              <td>Madrid</td>
              <td>Zurich</td>
              <td>Zurich</td>
              <td>Toronto<i>&nbsp;</i></td>
          </tr>
          <tr>
              <td>15</td>
              <td>Toronto</td>
              <td>Moscow</td>
              <td>Frankfurt<i>&nbsp;</i></td>
              <td>Beijing<i>&nbsp;</i></td>
          </tr>
          <tr>
              <td>16</td>
              <td>Zurich</td>
              <td>Houston<i>&nbsp;</i></td>
              <td>Chicago</td>
              <td>Berlin<i>&nbsp;</i></td>
          </tr>
          <tr>
              <td>17</td>
              <td>Moscow</td>
              <td>Shanghai</td>
              <td>Paris</td>
              <td>Madrid<i>&nbsp;</i></td>
          </tr>
          <tr>
              <td>18</td>
              <td>Mexico City</td>
              <td>Stockholm</td>
              <td>Boston</td>
              <td>Vienna</td>
          </tr>
          <tr>
              <td>19</td>
              <td>Chicago</td>
              <td>Munich</td>
              <td>Melbourne</td>
              <td>Boston</td>
          </tr>
          <tr>
              <td>20</td>
              <td>São Paulo</td>
              <td>Minneapolis</td>
              <td>Montreal<i>&nbsp;</i></td>
              <td>Frankfurt<i>&nbsp;</i></td>
          </tr>
      </tbody>
  </table>`,
  landmarks: `<h2>Most Famous Landmarks and Cultural Monuments in the World</h2>
  <p>Everybody knows the most famous landmarks in the world, you can name it, or?
      Anyhow, on the next pages you will find some, if not all, most famous landmarks and monuments around the world, as
      well as some, not everybody knows.
      Each of these cultural icons is a symbol with various meanings, it may represent an epoch, an area, a belief, a
      culture, a country or a city.</p>
  <h3>Eiffel Tower in France</h3>
  <p>This metal tower with three floors stands in the city centre of Paris. It was built for the 1889 World Fair
      (Universal Expo) to celebrate the 100th anniversary of the French Revolution.</p>
  <p>The 324metres/1062ft high Eiffel Tower was constructed by Auguste Eiffel and a team of engineers. If you would like
      to take the steps up to the tower viewing platform on the second floor, there are 704 steps to climb, but luckily
      there are also lifts in each of the leg up to the second floor.</p>
      <h3>Great Wall of China</h3>
      <p>The Great Wall is one of the seven wonders of the world. It runs in sections over a very long distance across China.</p>
      <p>The wall is also referred to as ‘Long Wall’ as it is over 21,196 km/13,171 miles long. It was built with stones, bricks and tiles, earth as well as of wooden material. The wall was completed in 1644, but it took more than 2,000 years to build.</p>
      <h3>Kremlin in Russia</h3>
      <p>The Grand Kremlin Palace is part of the Kremlin complex and is located next to the Red Square and St Basil’s Cathedral in Russia’s capital city Moscow.</p>
      <p>The Kremlin is a fortress with enclosing walls and is built along the Moskva River. The name ‘Kremlin’ means ‘fortress within a city’. The more than 500-year-old Kremlin includes the wall with its 20 towers as well as four churches and five palaces within the walls.</p>
      <h3>Leaning Tower of Pisa in Italy</h3>
      <p>The Leaning Tower of Pisa is one of Italy’s major tourist attractions. The freestanding bell tower of the Pisa Cathedral was built over almost two hundred years and was finished in 1399.</p>
      <p>The original hight of the tower was 60 meters/196ft, but as it is leaning, the lowest side is now less than 56 meters/184ft. The construction already caused many problems as the soil was soft, sandy and unstable. Already during construction, the builders tried to balance the leaning side with more columns on the other side, but the tower still leaned - like many other buildings in the area.</p>
      <h3>Great Pyramid of Giza in Egypt</h3>
      <p>The Great Pyramid of Giza near Cairo is one of the Seven Wonders of the Ancient World and the only one of these ancient world wonders which still exists. The pyramids are made of stone and bricks and stand near Cairo which is the capital of Egypt.</p>
      <p>The Egyptian pyramids were built during a time when there was only manual labour and no machine lifting equipment available. The pyramids were build to house the bodies of the pharaoh who ruled in ancient Egypt. Next to the Giza pyramids there is the Sphinx, the famous monument of a lion body with a pharaoh’s head.</p>
      <h3>Sydney Opera House in Australia</h3>
      <p>The Sydney Opera House, built in Australia’s biggest city, is famous for its roof’s architecture resembling shells or sails. The opera house was designed by Jørn Utzon from Denmark and it was built between 1959 and 1973.</p>
      <p>The roof is covered with more than 1 million roof tiles. These were manufactured in Sweden. The opera house has several performance halls and theatre and exhibition spaces.</p>
      <h3>Statue of Liberty in New York</h3>
      <p>The Statue of Liberty is 92 meters/ 305 ft high and is made of a iron structure with copper skin.</p>
      <p>Lady Liberty, as the statue often is referred to, was designed by Frederic Auguste Bartholdi and the massive iron skeleton of the lady was designed by Alexandre Gustave Eiffel who also designed the Eiffel Tower.</p>
      <p>The monument stands on Liberty Island in the Hudson River facing New York City. You can climb up the 154 steps from the pedestal to the head of the statue where you can see the fantastic views over the ‘Big Apple’ as New York is often lovingly called. </p>
      <h3>Taj Mahal in India</h3>
      <p>The Taj Mahal, which means 'crown of palaces' in the Persian language, stands on the riverbanks of the Yamuna River in Agra in northern India. </p>
      <p>In 1632 the emperor, Shah Jahan instructed to build a tomb for his favorite wife, Mumtaz Mahal. The Taj Mahal houses the tomb of the wife as well as a mosque and a guesthouse.</p>
      <h3>Moai on Easter Island/Chile</h3>
      <p>The Moai are huge statues on the Polynesian island Rapa Nui. The island is commonly called Easter Island and belongs to Chile. The Easter Island is more than 2,200 miles away from Chile in the middle of the Pacific Ocean.</p>
      <p>The islanders created more than 900 carved stone figures between 1250 and 1500. Most of the stone figures with the oversized heads were built with tuff stone and compressed volcanic ash.</p>
      <p>There are more than 900 monumental statues and 300 ceremonial platforms which are sacred to the Rapa Nui people.</p>
      <h3>Machu Picchu in Peru</h3>
      <p>Machu Picchu which means ‘Old Mountain’ in the local Quechua language is a famous site in Peru. It is also referred to as 'The Lost City of the Incas'.</p>
      <p>The ruins of the Lost City are located in the mountains, at more than 2,400 metres/8,000 feet above sea level. This ruin site has more than 200 different buildings and structures. The ruins were never discovered by the European conquistadors but only became known in 1911 when an American archeologist was led to the site by locals.</p>`,
  languages: `<h2>Languages of the World</h2>
  <p>Language is the specifically human capacity for acquiring and using complex systems of acoustic as well as kinesic signals to express thoughts and feelings, and language is used for the exchange of knowledge and experiences.</p>
  <p>The problem on this planet is the language systems vary greatly from region to region. The variety may be so different that one individual does not understand the language of a member from another region or country.</p>
  <table class="tb86">
      <tbody><tr>
      <td colspan="6" style="background-color:#BDCEE7"><b>Geographic Distribution of Living Languages (2009)</b></td>
      </tr>
      <tr>
      <td style="width:134px; background-color:#EEE">&nbsp;</td>
      <td style="width:126px; background-color:#EEE; text-align:right">Total Living Languages</td>
      <td style="width:72px; background-color:#EEE; text-align:right">Percentage</td>
      <td style="width:13px; background-color:#EEE">&nbsp;</td>
      <td style="width:165px; background-color:#EEE; text-align:right">Number of speakers</td>
      <td style="width:312px; background-color:#EEE">&nbsp;</td>
      </tr>
      <tr>
      <td style="width:134px">
      Countries in Africa</td>
      <td style="text-align:right">2,110</td>
      <td style="text-align:right">30.5 %</td>
      <td>&nbsp;</td>
      <td style="text-align:right">726,453,403</td>
      <td>&nbsp;</td>
      </tr>
      <tr style="background-color:#EEE">
      <td style="background-color:#FFF">
      Countries in the Americas and the Caribbean</td>
      <td style="text-align:right">993</td>
      <td style="text-align:right">14.4 %</td>
      <td>&nbsp;</td>
      <td style="text-align:right">50,496,321</td>
      <td>&nbsp;</td>
      </tr>
      <tr>
      <td style="width:134px">
      Countries in Asia</td>
      <td style="text-align:right">2,322</td>
      <td style="text-align:right">33.6 %</td>
      <td>&nbsp;</td>
      <td style="text-align:right">3,622,771,264</td>
      <td>&nbsp;</td>
      </tr>
      <tr style="background-color:#EEE">
      <td style="background-color:#FFF">
      Countries in Australia/Pacific</td>
      <td style="text-align:right">1,250</td>
      <td style="text-align:right">18.1 %</td>
      <td>&nbsp;</td>
      <td style="text-align:right">6,429,788</td>
      <td>&nbsp;</td>
      </tr>
      <tr>
      <td style="width:134px">
      Countries in Europe</td>
      <td style="text-align:right">234</td>
      <td style="text-align:right">3.4 %</td>
      <td>&nbsp;</td>
      <td style="text-align:right">1,553,360,941</td>
      <td>&nbsp;</td>
      </tr>
      <tr style="background-color:#EEE">
      <td style="background-color:#FFF">Total<br>
      &nbsp;</td>
      <td style="text-align:right">6,909</td>
      <td style="text-align:right">100 %</td>
      <td>&nbsp;</td>
      <td style="text-align:right">5,959,511,717</td>
      <td>&nbsp;</td>
      </tr>
      <tr>
      <td colspan="6">Source: <a href="https://www.ethnologue.com/" rel="nofollow" target="_top">Ethnologue</a><br>
      &nbsp; </td>
      </tr>
      </tbody></table>
  `,
  currencies: `<p>Currency, is a system of money in general use in a particular country at a specific time.</p>
  <p>Below you will find a list of money in use for each country around the world, as well as the corresponding three-character alphabetic, and the three-digit numeric ISO 4217 code for each currency.</p>
  <h2>Major trading currencies</h2>
  <p>In many countries around the world, the Euro and the US Dollar are the preferred foreign currencies. Other major trading currencies are: Japanese Yen (JPY), British Pound Sterling (GBP), Australian Dollar (AUD), Canadian Dollar (CAD), Swiss Franc (CHF), Chinese Yuan (Renminbi; CNY), Swedish Krona (SEK), New Zealand Dollar (NZD), and the Mexican Peso (MXN).</p>
  <p>The U.S. Dollar and the Euro are important international reserve currencies. The US Dollar is the official currency in the US and its territories; it is also used in several countries outside the USA as the legal tender. Countries in which the US Dollar is the official currency: East Timor, Ecuador, El Salvador, Federated States of Micronesia, Marshall Islands, Palau, Panama, and Zimbabwe. The US dollar is pegged by 27 currencies.</p>
  <p>In 19 countries of the European Union, the Euro is the sole legal tender. Additionally, Andorra, Monaco, San Marino, and the Vatican City use the Euro as their official currency and issue their own coins. Twelve currencies are pegged to the Euro at a fixed exchange rate.</p>
  <h2>Exchange Rates</h2>
  <p>The exchange rate is the rate for how much money you get for your bucks or euros. In expert-speech, it is the value of one currency for the purpose of conversion to another.</p>
  <p>The exchange rate is changing more or less on a day to day base, but not much. To get a feeling about how much your money is worth in a foreign country read up on the latest currency exchange rates, for that you may use a Currency Converter app or a service like x-rates.com.</p>`,
  bananas: `<p>What actually is a continent, and how many are there?</p>
  <h2>What does the dictionary say?</h2>
  <p>
    All right, then, a continent is "a large, continuous area of land on
    Earth." All continents of the Earth together make up about one-third of
    the total surface of the planet. The fact is, more than two-thirds of the
    Earth's surface is covered by water. The landmasses of the Earth are
    unequally distributed, two-thirds of the continental landmass is located
    in the Northern Hemisphere (the upper half of the globe, north of the
    equator). Why is that? This might be just a feature of our current point
    in geological time because some million years ago, the bulk of the
    planet's landmass was in the Southern Hemisphere.
  </p>`,
  grapes: `<p>What actually is a continent, and how many are there?</p>
  <h2>What does the dictionary say?</h2>
  <p>
    All right, then, a continent is "a large, continuous area of land on
    Earth." All continents of the Earth together make up about one-third of
    the total surface of the planet. The fact is, more than two-thirds of the
    Earth's surface is covered by water. The landmasses of the Earth are
    unequally distributed, two-thirds of the continental landmass is located
    in the Northern Hemisphere (the upper half of the globe, north of the
    equator). Why is that? This might be just a feature of our current point
    in geological time because some million years ago, the bulk of the
    planet's landmass was in the Southern Hemisphere.
  </p>`,
};

export default textMapping;
