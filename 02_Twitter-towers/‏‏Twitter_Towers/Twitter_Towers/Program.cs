using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Runtime.Intrinsics.X86;
using System.Security.Principal;
using System.Threading.Tasks;


namespace collections
{
    static class Program
    {
        //rectangle shape
        public static void RectangularTower(int height, int width)
        {
            if (height==width||Math.Abs(height - width) > 5)
                Console.WriteLine("The area of the rectangle is " + height * width);
            else
                Console.WriteLine("The perimeter of the rectangle is " + (height + width) * 2);
        }
        //Triangle shape
        public static void TriangularTower(int height, int width)
        {
            Console.WriteLine("To calculate the perimeter of the triangle, enter 1");
            Console.WriteLine("To print the triangle enter 2");
            int choose = int.Parse(Console.ReadLine());
            if (choose == 1)
                CalculateTrianglePerimeter(width, height);
            if (choose == 2)
                PrintTheTriangle(height, width);
        }
        //Calculating the perimeter of a triangle.
        //Finding the length of the side, by the Pythagorean theorem.
        public static void CalculateTrianglePerimeter(int width, int height)
        {
            double side= Math.Sqrt(Math.Pow(width/2, 2) + Math.Pow(height, 2));
            Console.WriteLine("The perimeter of the triangle is "+side*2+width);
        }
            //A utility function that prints a single line
            public static void PrintLine(int width, int numOfBackspaces)
        {
            for (int j = 0; j < width; j++)
                if (j < numOfBackspaces || j >= width - numOfBackspaces)
                    Console.Write(" ");
                else
                    Console.Write("*");
            Console.WriteLine();
        }
        //Triangle print
        public static void PrintTheTriangle(int height, int width)
        {
            if (width % 2 == 0 || width > height * 2)
                Console.WriteLine("Sorry, it is'nt possible to print this triangle");
            else
            {
                if ((width % 2) == 1 || width < height * 2)
                {
                    //first row
                    for (int i = 0; i < height; i++)
                        if (i == width / 2)
                            Console.Write("*");
                        else
                            Console.Write(" ");
                    Console.WriteLine();
                    //rows in the middle
                    int max_numOfAsterisks = width-2;
                    int min_numOfAsterisks = 3;
                    int countOfRowTypes = 1;
                    while (min_numOfAsterisks < max_numOfAsterisks)
                    {
                        countOfRowTypes++;
                        min_numOfAsterisks+=2;
                    }
                    min_numOfAsterisks = 3;
                    int numOfBackspaces = (width - min_numOfAsterisks) / 2;
                    int midLines = height - 2;
                    int div = midLines / countOfRowTypes;//Default of division
                    int rDiv = div+midLines % countOfRowTypes;//Number of times that the line with 3 stars will appear - with the remainder of the division
                    for (int i = 0; i < rDiv; i++)
                        PrintLine(width, numOfBackspaces);
                    numOfBackspaces -= 1;
                    min_numOfAsterisks += 2;
                    while (min_numOfAsterisks < width)
                    {
                        for (int i = 0; i < div; i++)
                            PrintLine(width, numOfBackspaces);
                        numOfBackspaces -= 1;
                        min_numOfAsterisks += 2;
                    }
                    // last row
                    PrintLine(width, 0);
                }
            }

        }
        static void Main()
        {
            Console.WriteLine("To build a rectangular tower enter 1");
            Console.WriteLine("To build a triangle tower enter 2");
            Console.WriteLine("To exit enter 3");
            int option = int.Parse(Console.ReadLine());
            while (option != 3)
            {
                Console.WriteLine("Enter a height for the tower");
                int height = int.Parse(Console.ReadLine());
                Console.WriteLine("Enter a width for the tower");
                int width = int.Parse(Console.ReadLine());
                if (option == 1)
                    RectangularTower(height, width);
                else
                    TriangularTower(height, width);
                Console.WriteLine("To build a rectangular tower enter 1");
                Console.WriteLine("To build a triangle tower enter 2");
                Console.WriteLine("To exit enter 3");
                option = int.Parse(Console.ReadLine());
            }

        }
    }
}
