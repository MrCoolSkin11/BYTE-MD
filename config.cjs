const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA5VUzY6jRhh8lVVf7Vn+jbE0UjD2GGxjY+Nfoj000ECbX0NjG4982lUU7SXvkEuOUbQvM36OvEDE/GjmkN1Mbq2mqa6u+qruQZLiAo1QBTr3IMvxARJUL0mVIdAB3dLzUA6awIUEgg44Gg6dWMeFmo7oUwQ1lUhL7lCRNoVN7tAW+xSLcKNt9Wj5FlyaICvtCDs/AKS3vAKNIyXnVb9Bz3R2RI6OfrAgvzHaKaVOKf90NvHWC+hbcKkRIc5x4vezAMUoh9EIVQbE+fvom5qzGorBuGwcT8c7p9Uo24lA26Le1STqbM69Pb+xzLMYbmbvo6+mvWWvmHLaMmycjhqrjSptW61OE/lw3hqhIVhqyi/9ybpaPtEvsJ8gV3NRQjCp3q07K1uJ42TeAt815DEOh1ujyFdjVQlEua9O2ARq0kqswiXnvJP4biqzR5ptqcVhm0ZogVWpx3qxPnW0ZbazkljerQileCf6LXEjf5mV8P/ofpQnEO+zQ7+MXHua6WNBHwvGuTU9nSuay7oqZhjKcgYWq7+PflCsZ7Rxt9iseWd4ELbxjN7IcM302bA92S8n6pKEwprp5av+K31IyvxHLP2NEMeO6KXYSu4Me3zaFXtmrgfFVtbHRtvvqWaLOStnncwUCW0FnxoqSUQRrdvNFro0RN45tCnJEpWSV+7yUsdBGMi3jy8KUaW5oMNcmiBHPi5IDglOk3qPFdgmgO7BRE6OyKO8QJ+ZwkGZG4yws+LBet0YLQaNnHZmNLUrpriQ9inDeeK6yGe3oAmyPHVQUSBXxQVJ80pHRQF9VIDOz5+aIEEn8mRcfR3HNIGH84IskzKLUui+uPryETpOWibErBJHqRcoBx36dRsRghO/qHUsE5g7AT4gJYCkAB0PRgW6NIGLDthBNR4YZ3xgrshwLo20zTZHTtTntseacpAmT0cc1EYCL8Eb6AqtG57hmBubsfkbkWY4yYHQ5ngRNAF+zkz9z3ctvJMUhp1aIdRUl5/oaGidW8uBkmL4FOgn7VGOXNAheYmawIZOWGaLNETJD3BD1xuvFIM5z0M4sO3dPmkFmx2OxEb4BvfJU9C5f+0pJXVrPG7REteC2QZNED+OIK5fzvKc1KZbPMOKfIdhfio+HmshYZZ9TBABTZDA+jR4+OP65eHb9evDnx+un6+/Xr98ePh2/Xz9ev3l779+/439yNcUnv2pwV1EII4K0AGKbo9a1FHtGz01FenBQJ75suLL4NXPl2A8DR7stbOBjLf8vlr28pXbiNjcdN22XU6Fs0/EBl0wibll7cS//ReQumOZcLxJCzdYopzTu43oTpvHgts2pt25mp3EdbArnF1emRI1P8m7YNbr7jy3wkhT4uFCW8+DYHTiW/aodExsOmdneG736hS9zNXby8RFcFpN9EF34SlGTCk+u7PSRjxpNY7qdFJuNK19h7uLYYNOT5t57I4Fpt9D89lYjDhjuZVDdjQ00NBktYmfpvAkcSPoP0f2sTKi56rGj2G6f55CD6PH5nv25z99fA0EfWm+wXju0u8MXXftU6O5r8XTURHJLWbjZe6eTjbeQNyVDj9GFBlPLDqexAIPLpdPTZBFkHhpHoMOKGIbgiaIYEHk10AvcIwKAuMMdBiRkxiWabXYyz9yFcrIBggAAA==",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "923072380380",
  "OWNER_NAME": process.env.OWNER_NAME || "Hamza",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
