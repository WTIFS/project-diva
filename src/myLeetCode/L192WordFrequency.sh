# Write a bash script to calculate the frequency of each word in a text file words.txt.

# For simplicity sake, you may assume:

# words.txt contains only lowercase characters and space ' ' characters.
# Each word must consist of lowercase characters only.
# Words are separated by one or more whitespace characters.
# For example, assume that words.txt has the following content:

# the day is sunny the the
# the sunny is is
# Your script should output the following, sorted by descending frequency:
# the 4
# is 3
# sunny 2
# day 1

cat L192WordFrequency.txt | tr -s ' ' '\n' | sort | uniq -c | sort -rn | awk '{print $2, $1}'

#tr: replace
#sort: uniq only counts nearby strings so sort first
#uniq: -c prints the counting before the string
#sort: -r: reverse  -n: count by int (so 30>4)