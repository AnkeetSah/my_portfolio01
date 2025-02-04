fun main(args: Array<String>){
    val list=listOf("geeks","for","geeks","hello","world")
    val longerThan4=list.filter { it.length>4 }
    println(longerThan4)
    val numbersMap=mapOf("Key13" to 10, "key25" to 20,
    "key34" to 30, "key45" to 40 , "key55"  to 50)
    val filteredMap=numbersMap.filter {(key,value)->
       key.endsWith("5") && value>20 }
    println(filteredMap)
}