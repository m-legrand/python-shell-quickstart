import sys

title = sys.argv[1];
filler = (38-len(title))*" ";
print ("########################################\n" +
       "# " + title + filler + "#\n" +
       "########################################\n\n" +
       "First result :  " + sys.argv[2] + "\n\n" +
       "Second result : " + sys.argv[3]);
