# mp-design-pattern
Multiplataform project using Javascript(Nestjs, Nextjs, Electron)



#### phrase scrambler
In both interfaces there will be 1 input, 1 button and 1 response box, basically the user will type a sentence, we will call the backend to register this sentence and perform all the necessary treatment, and we will do the registration based on the before and after, and we will return the scrambled phrase to the user.


#### endpoints
```
Request
http://localhost:8080/embaralhar?frase=...

Response -> data
'frase embaralhada'
```