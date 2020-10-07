# gg_fnc_assignment

## Features:

- When an image is uploaded to the firebase storage. the function `processImage` will be trigger and analyse the content inside the image.
It will print out the label of that image.
Example: 
```
 [ { locations: [],
     properties: [],
     mid: '/m/07s6nbt',
     locale: '',
     description: 'Text',
     score: 0.9882610440254211,
     confidence: 0,
     topicality: 0.9882610440254211,
     boundingPoly: null },
   { locations: [],
     properties: [],
     mid: '/m/03gq5hm',
     locale: '',
     description: 'Font',
     score: 0.9290081262588501,
     confidence: 0,
     topicality: 0.9290081262588501,
     boundingPoly: null },
   { locations: [],
     properties: [],
     mid: '/m/03scnj',
     locale: '',
     description: 'Line',
     score: 0.8226431012153625,
     confidence: 0,
     topicality: 0.8226431012153625,
     boundingPoly: null } ] 
```

## What problems did I face when building this function?

- At the time I received this assignment, I have no experience about Google cloud function and firebase storage.
- I have started to search in the internet what are `Cloud functions` and `Firebase Storage`
- When I started to implement it. I faced with different versions of firebase sdk, leads to different method and function name. 
- I have spend about 3 hours for the basic function `renamed image` (when someone upload an image, this function will trigger just for rename (just for studying purpose)). Of course, It did not take too much time like that. I had a problem with the `renamed image`, which can not be public automatically at the beginning. So that, I have to completely find out the approach for generate access token for the `renamed` image.
- After finish my own small challenge. I went back to the task. 
- I found a service in Google Cloud, named `Cloud Vision API` that allows developers can execute some image processing and other AI & ML stuffs (this is my first task relate to Machine Learning)
- I have recognized that my current node version in this `project` is **8**. So that I have to upgrade it to **10** in order to use `Cloud Vision API`
- I have finished this task in the morning of Oct 7th 2020. However, I still want to find out the solution for reuse it later.
 
 ## Improvement?
 
 - Well, I think for now, this function is not so helpful (we can only preview it in `log` tab). It should store the result data in database for using later.
 - I think we could use `http cloud function` for upload image, then also execute image processing, and return the `json result` 