using System;
using System.Linq;

class Program
{
    const int MAX = 100;

    static int Sum(int[] arr)
    {
        return arr.Sum();
    }

    static void Main()
    {
        var n = ReadAndValidateNumber("Enter the number of elements (1-100): ", 1, 100);

        var arr = new int[n];

        Console.WriteLine($"Enter {n} integers:");
        for (var i = 0; i < n; i++)
        {
            arr[i] = ReadAndValidateNumber($"Enter integer {i+1}: ", int.MinValue, int.MaxValue);
        }

        var total = Sum(arr, n);

        Console.WriteLine($"Sum of the numbers: {total}");
    }

    static int ReadAndValidateNumber(string prompt, int min, int max)
    {
        int number;
        Console.Write(prompt);
        if (!int.TryParse(Console.ReadLine(), out number) || number < min || number > max)
        {
            Console.WriteLine($"Invalid input. Please provide a digit ranging from {min} to {max}.");
            Environment.Exit(1);
        }
        return number;
    }
 }