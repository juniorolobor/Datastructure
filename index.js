// Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
// Example:
// Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
// Output: 13 (distinct elements 4, 7, 2 )
// Give a solutions to this problem, using arrays


Function sum_of_distinct_elements(set1, set2):
    //Convert the sets into arrays to make it easier to work with
    array1 = list(set1)
    array2 = list(set2)

    //Combine the two arrays into one
    combined_array = array1 + array2

    //Use a set to remove duplicates
    distinct_elements = set(combined_array)

    //Find the sum of distinct elements
    sum_of_distinct = sum(distinct_elements)

    return sum_of_distinct

//Example usage:
set1 = [3, 1, 7, 9]
set2 = [2, 4, 1, 9, 3]
console.log(sum_of_distinct_elements(set1, set2))




// Write a procedure, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
// Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.
// Modify the previous algorithm if you use a dot_product function instead of a procedure.


function dot_product(v1, v2):
ps = 0
for i in range(len(v1)):
    ps += v1[i] * v2[i]
return ps

def are_orthogonal(v1, v2):
ps = dot_product(v1, v2)
if ps == 0:
    return True
else:
    return False

// Example usage for checking orthogonality of n pairs of vectors
// n = 3   Number of pairs of vectors

vectors = [([1, 0, 0], [0, 1, 0]),
       ([1, 1, 0], [0, -1, 1]),
       ([2, 3, -1], [-1, -2, 1])]

for i in range(n):
v1, v2 = vectors[i]
if are_orthogonal(v1, v2):
    (f"Vectors {v1} and {v2} are orthogonal.")
else:
    (f"Vectors {v1} and {v2} are not orthogonal.")



    function dot_product(v1, v2):
    ps = 0
    for i in range(len(v1)):
        ps += v1[i] * v2[i]
    return ps

def are_orthogonal(v1, v2):
    ps = dot_product(v1, v2)
    return ps == 0

//  Example usage for checking orthogonality of n pairs of vectors
// n = 3  # Number of pairs of vectors

vectors = [([1, 0, 0], [0, 1, 0]),
           ([1, 1, 0], [0, -1, 1]),
           ([2, 3, -1], [-1, -2, 1])]

for i in range(n):
    v1, v2 = vectors[i]
    if are_orthogonal(v1, v2):
        (f"Vectors {v1} and {v2} are orthogonal.")
    else:
        (f"Vectors {v1} and {v2} are not orthogonal.")

