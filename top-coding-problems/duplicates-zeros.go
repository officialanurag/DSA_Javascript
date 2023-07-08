func duplicateZeros(arr []int)  {
    i := 0
    for i < len(arr) {
        if arr[i] == 0 {
            for j := len(arr)-1; j >= i+1; j-- {
                arr[j] = arr[j-1];
            }
            i = i + 2;
        } else {
            i = i + 1;
        }
    }
}