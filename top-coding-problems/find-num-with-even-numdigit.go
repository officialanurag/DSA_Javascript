func findNumbers(nums []int) int {
    var numOfEven int = 0;
    
    for i := 0; i < len(nums); i++ {
        var count int = 0;
        var cpy int = nums[i];
        
        for {
            if cpy < 10 {
                break;
            }
            cpy = cpy / 10;
            count++;
        }
        count++;
        
        if count & 1 == 0 {
            numOfEven++;
        }    
    }
    
    return numOfEven;
}