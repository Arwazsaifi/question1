
const {MongoClient}=require('mongodb');
const url="mongodb://127.0.0.1:27017";
const dbName='mydb';
const client=new MongoClient(url);
const md5=require('md5');

async function connectData()
{
  const result=await client.connect();
  console.log("database connected");
  const db=result.db(dbName);
  db.createCollection("user",function(err,db)
  {
    if(err) throw err;
  });
  db.createCollection("userProfile",function(err,db)
  {
    if(err) throw err;
  });
  const userKeys=[
    {firstname:'Arwaz',lastname:'saifi',email:'arwaz@gmail.com',password:md5('arwaz')},
    {firstname:'Mohan',lastname:'sharma',email:'Mohan98879@gmail.com',password:md5('mohan')},
    {firstname:'Rohit',lastname:'verma',email:'rohit68@gmail.com',password:md5('Rohit')},
    {firstname:'Karan',lastname:'saxena',email:'karan08@gmail.com',password:md5('karan')},
    {firstname:'Arman',lastname:'khan',email:'arman67@gmail.com',password:md5('arman')},
  ];
  const userProfileKeys=[
    {user_id:'101',dob:'28-06-2001',mobile_no:'7832732822'},
    {user_id:'102',dob:'11-02-2002',mobile_no:'1122334455'},
    {user_id:'103',dob:'20-05-2003',mobile_no:'6677889900'},
    {user_id:'104',dob:'1-06-1999',mobile_no:'6683289763'},
    {user_id:'105',dob:'28-06-1998',mobile_no:'7832732822'},

  ];

  await db.collection('user').insertMany(userKeys);
  await db.collection('userProfile').insertMany(userProfileKeys);
  
  console.log("data added successfully");

}
connectData();