const friendsGroup = {
  a: ['b', 'c'],
  b: ['d', 'e'],
  e: ['f', 'g'],
  g: ['y', 'z'],
  y: ['p', 'q'],
};

const getMutualFriends = (friendsGroup, person) => {
  const friendList = friendsGroup[person];

  if (friendList && friendList.length) {
    const mutualFriendsList = [...friendList];

    for (let friend of friendList) {
      const mutualFriends = getMutualFriends(friendsGroup, friend);
      mutualFriendsList.push(...mutualFriends);
    }
    return mutualFriendsList;
  }
  return [];
};

const mutualFriends = getMutualFriends(friendsGroup, 'a');

// console.log("a:" , ...mutualFriends);

let mutual = friendsGroup['a'];
let mutual2 = [...mutual];
console.log(mutual2);
